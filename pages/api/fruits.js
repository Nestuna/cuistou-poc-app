import { connectToDatabase } from "../../utils/mongodb";

export default async (req, res) => {
    
    const { client, db } = await connectToDatabase();
    const fruits = await db.collection('fruits').find({}).toArray()

    //client.close()

    res.json(fruits);
};