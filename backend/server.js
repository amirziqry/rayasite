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

    console.log('Received amount:', amount) // for debugging

    if (!amount || amount <= 0) {
      return res.status(400).json({ error: 'Invalid amount' })
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // RM 410.00 → 41000
      currency: 'myr',
      automatic_payment_methods: { enabled: true },
    })

    res.json({ clientSecret: paymentIntent.client_secret })
  } catch (error) {
    console.error('Stripe error:', error.message)
    res.status(500).json({ error: error.message })
  }
})

app.listen(4000, () => console.log('Server running on port 4000'))