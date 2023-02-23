import connectMongoose from '@/lib/mongoose'
import Order from '@/models/Order'
import { buffer } from 'micro'

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res) {
  await connectMongoose()
  const payload = await buffer(req)
  const signingSecret =
    'whsec_3f4685aabac7b29d5d0eee05e45cd684415e1bcde8d2f6dab0df4848e6153c4e'
  const signature = req.headers['stripe-signature']

  const event = stripe.webhooks.constructEvent(
    payload,
    signature,
    signingSecret
  )

  if (event?.type === 'checkout.session.completed') {
    const metadata = event.data?.object?.metadata
    const paymentStatus = event.data?.object?.payment_status
    if (metadata?.orderId && paymentStatus === 'paid') {
      await Order.findByIdAndUpdate(metadata.orderId, { paid: 1 })
    }
  }

  res.json('ok')
}

export const config = {
  api: {
    bodyParser: false
  }
}
