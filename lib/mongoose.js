import mongoose from 'mongoose'

const DATABASE_URL = process.env.MONGODB_URI

export default async function connectMongoose() {
  if (mongoose.connection.readyState === 1)
    return await mongoose.connection.asPromise()
  return await mongoose.connect(DATABASE_URL)
}
