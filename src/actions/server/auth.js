'use server'

import { dbConnect } from "@/lib/dbConnect";
import bcrypt from 'bcryptjs';

export const postUser = async(payload) => {
   

    // 1 is exist
    const isExist = await dbConnect('users').findOne({email: payload.email})
    if (isExist) {
        return {
            success: false,
            message: 'user already exist'
        }
    }
    // 2 create new  user
    const hashPassword = await bcrypt.hash(payload.password, 10);
    const newUser = {
        name: payload.name,
        email: payload.email,
        password: hashPassword,
        role: "user",
        createdAt: new Date()
    }

    

    // 3 send data to user
    const result = await dbConnect('users').insertOne(newUser);
    if (result.acknowledged) {
        return {
            success: true,
            message: `user created with ${result.insertedId.toString()}`
        }
    }

}