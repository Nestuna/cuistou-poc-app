import { connectToDatabase } from "../../utils/mongodb";

export default async (req, res) => {
    
    const { client, db } = await connectToDatabase();
    const user = await db.collection('user').find({}).toArray()

    client.close()

    res.json(user);
};