import { connectToDatabase } from '../../utils/mongodb'
export default async (req, res) => {
    console.log(req.body)
  const { client, db } = await connectToDatabase()
  const collection = await db.collection('user')
  const insertResult = await collection.insertMany([

    {
      email: req.body.email,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      password: req.body.password,
    },
  ])
  client.close()
  res.json(insertResult)
}
