import express from 'express'
import Stripe from 'stripe'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

app.use(cors({ origin: process.env.CLIENT_URL }))
app.use(express.json())

app.post('/create-payment-intent', async (req, res) => {
    try {
        const { amount } = req.body

        const paymentIntent = await stripe.paymentIntents.create({
            amount: Math.round(amount * 100),
            currency: 'myr',
            automatic_payment_methods: { enabled: true }, // enables all methods including FPX, Apple Pay, Google Pay
        })

        res.json({ clientSecret: paymentIntent.client_secret })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

app.listen(4000, () => console.log('Server running on port 4000'))