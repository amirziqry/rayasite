import React, { useContext, useState, useEffect } from 'react'
import { shopContext } from '../context/shopContext.jsx'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from '../components/checkoutForm.jsx'
import Title from '../components/title.jsx'

const stripePromise = loadStripe('pk_test_your_publishable_key_here')

const PlaceOrder = () => {
    const { cartItems, products, currency, getCartAmount, delivery_fee } = useContext(shopContext)
    const [clientSecret, setClientSecret] = useState('')

    const cartList = []
    for (const itemId in cartItems) {
        for (const size in cartItems[itemId]) {
            if (cartItems[itemId][size] > 0) {
                const product = products.find(p => p._id === itemId)
                if (product) cartList.push({ ...product, size, quantity: cartItems[itemId][size] })
            }
        }
    }

    const total = getCartAmount() + delivery_fee

    useEffect(() => {
        const fetchIntent = async () => {
            try {
                const res = await fetch('http://localhost:4000/create-payment-intent', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ amount: total })
                })
                const data = await res.json()
                setClientSecret(data.clientSecret)
            } catch (err) {
                console.error('Failed to create payment intent', err)
            }
        }
        if (total > 0) fetchIntent()
    }, [total])

    return (
        <div className='pt-10 pb-20 max-w-2xl mx-auto'>
            <div className='text-center pb-8 text-3xl'>
                <Title text1={'PLACE'} text2={'ORDER'} />
            </div>

            {/* Order Summary */}
            <div className='bg-gray-50 rounded-xl p-6 mb-6'>
                <h2 className='text-sm font-semibold text-gray-700 uppercase tracking-wider mb-4'>Order Summary</h2>
                {cartList.map((item, i) => (
                    <div key={i} className='flex justify-between text-sm text-gray-600 py-2 border-b last:border-0'>
                        <span>{item.name} — Size {item.size} x{item.quantity}</span>
                        <span>{currency}{(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                ))}
                <div className='flex justify-between text-sm text-gray-500 mt-3'>
                    <span>Delivery</span>
                    <span>{currency}{delivery_fee.toFixed(2)}</span>
                </div>
                <div className='flex justify-between text-base font-bold text-gray-900 mt-3 pt-3 border-t'>
                    <span>Total</span>
                    <span>{currency}{total.toFixed(2)}</span>
                </div>
            </div>

            {/* Stripe Payment Element */}
            {clientSecret ? (
                <Elements stripe={stripePromise} options={{ clientSecret }}>
                    <CheckoutForm amount={total} />
                </Elements>
            ) : (
                <p className='text-center text-gray-400 text-sm'>Loading payment options...</p>
            )}
        </div>
    )
}

export default PlaceOrder