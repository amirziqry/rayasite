import React, { useState, useEffect, useContext } from 'react'
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js'
import { useNavigate } from 'react-router-dom'
import { shopContext } from '../context/shopContext.jsx'

const CheckoutForm = ({ amount }) => {
    const stripe = useStripe()
    const elements = useElements()
    const navigate = useNavigate()
    const { setCartItems } = useContext(shopContext)

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!stripe || !elements) return

        setLoading(true)
        setError(null)

        const result = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: `${window.location.origin}/orders`
            },
            redirect: 'if_required'
        })

        if (result.error) {
            setError(result.error.message)
            setLoading(false)
        } else if (result.paymentIntent?.status === 'succeeded') {
            setCartItems({})
            navigate('/orders')
        }
    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
            <div className='border border-gray-300 rounded-lg p-4 bg-white'>
                <PaymentElement />
            </div>

            {error && <p className='text-red-500 text-sm'>{error}</p>}

            <button
                type='submit'
                disabled={!stripe || loading}
                className='w-full py-3 bg-black text-white text-sm font-medium rounded hover:bg-gray-800 disabled:bg-gray-400 active:scale-95 transition-all'
            >
                {loading ? 'Processing...' : `Pay ${amount.toFixed(2)} MYR`}
            </button>

            <p className='text-xs text-center text-gray-400'>🔒 Payments secured by Stripe</p>
        </form>
    )
}

export default CheckoutForm