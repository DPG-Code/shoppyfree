import mongoose from 'mongoose'

const DATABASE_URL = process.env.NEXT_PUBLIC_MONGODB_URI

export default async function connectMongoose() {
  mongoose.set('strictQuery', true)
  if (mongoose.connection.readyState === 1)
    return await mongoose.connection.asPromise()
  return await mongoose.connect(DATABASE_URL)
}
