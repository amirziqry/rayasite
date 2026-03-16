import { useState, useEffect, useContext } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { shopContext } from '../context/shopContext.jsx'
import CheckoutForm from '../components/checkoutForm.jsx'

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)

const Checkout = () => {
  const { getCartAmount, delivery_fee } = useContext(shopContext)
  const [clientSecret, setClientSecret] = useState(null)
  const [error, setError] = useState(null)

  const subtotal = getCartAmount()
  const total = subtotal + delivery_fee

  useEffect(() => {
    if (subtotal <= 0) return

    fetch(`${import.meta.env.VITE_BACKEND_URL}/create-payment-intent`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: total })  // just send total
    })
      .then(r => r.json())
      .then(data => {
        if (data.error) setError(data.error)
        else setClientSecret(data.clientSecret)
      })
      .catch(() => setError('Could not connect to server. Is your backend running?'))
  }, [subtotal])

  if (subtotal <= 0) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <p className='text-gray-400'>Your cart is empty.</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <p className='text-red-500'>{error}</p>
      </div>
    )
  }

  if (!clientSecret) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <p className='text-gray-400 text-sm'>Loading payment options...</p>
      </div>
    )
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 px-4'>
      <div className='w-full max-w-md bg-white rounded-xl shadow-sm p-8'>
        <h1 className='text-xl font-medium mb-2'>Complete your order</h1>
        <p className='text-sm text-gray-400 mb-1'>Subtotal: RM {subtotal.toFixed(2)}</p>
        <p className='text-sm text-gray-400 mb-6'>Delivery: RM {delivery_fee.toFixed(2)}</p>
        <p className='text-base font-medium mb-6'>Total: RM {total.toFixed(2)}</p>

        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm amount={total} />
        </Elements>
      </div>
    </div>
  )
}

export default Checkout