import * as bcrypt from 'bcrypt'
import { connectToDatabase } from '../../utils/mongodb'



export default async (req, res) => {

    let password = req.body['user'].password
    let email = req.body['user'].email

    let { client, db } = await connectToDatabase()

    let user = await db.collection('user').find({ email: email }).toArray()


    if (user.length === 0) {
        return res.status(404).json({
            success: 0
        })
    } else if (bcrypt.compareSync(password, user[0].password)) {
        return res.status(200).json({
            user: user,
            success: 1
        })
    } else {
        return res.status(401).json({
            success: -1
        })
    }
}