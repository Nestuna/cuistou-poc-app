import { MongoClient } from 'mongodb'

let uri = "mongodb://sunland_test:Metallica77100**@mongodb-sunland.alwaysdata.net/sunland_cuistou?authMechanism=DEFAULT"
let dbName = "sunland_cuistou"

let cachedClient = null
let cachedDb = null

if (!uri) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

if (!dbName) {
  throw new Error(
    'Please define the MONGODB_DB environment variable inside .env.local'
  )
}

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb }
  }

  const client = await MongoClient.connect(uri)

  const db = await client.db(dbName)

  cachedClient = client
  cachedDb = db

  return { client , db }
}