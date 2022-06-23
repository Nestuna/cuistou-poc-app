import { connectToDatabase } from "../../utils/mongodb";

export default async (req, res) => {
    
    const { client, db } = await connectToDatabase();
    const legumes = await db.collection('vegetables').find({}).toArray()

    //client.close()

    res.json(legumes);
};