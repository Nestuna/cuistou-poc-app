import { connectToDatabase } from '../../utils/mongodb'
export default async (req, res) => {
  console.log(req.body['user'])
  const { client, db } = await connectToDatabase()
  const collection = await db.collection('user')
  const insertResult = await collection.insertMany([
    {
      firstName: req.body['user'].firstname,
      lastName: req.body['user'].lastname,
      email: req.body['user'].email,
      password: req.body['user'].password
    }
  ])
  res.json(insertResult)
}
