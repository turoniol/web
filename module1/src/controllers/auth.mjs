import { getUser } from '../services/users.mjs';
import jwt from 'jsonwebtoken';
import config from '../config/config.mjs';

const getToken = async (name) => {
    try {
        const existingUser = await getUser(name);

        if(!existingUser){
            throw new Error('Unauthorised!')
        }
    
        const accessToken = jwt.sign({sub: existingUser._id}, config.JWT_SECRET, {
            algorithm: 'HS256',
            expiresIn: "1h"
        })
    
        return {
            accessToken
        }
    } catch (e) {
        return e;
    }
}

export {
    getToken
}