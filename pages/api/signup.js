import * as bcrypt from 'bcrypt'
import { connectToDatabase } from '../../utils/mongodb'


export default async (req, res) => {

  const { client, db } = await connectToDatabase()
  const collection = await db.collection('user')


  const insertResult = await collection.insertMany([
    {
      firstName: req.body['user'].firstName,
      lastName: req.body['user'].lastName,
      email: req.body['user'].email,
      password: bcrypt.hashSync(req.body['user'].password , 10),
      favorites_recipes: []
    }
  ])

  client.close()
  res.json(insertResult)
}
