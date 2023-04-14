import jwt from "jsonwebtoken";
import config from '../config/config.mjs';

const extractToken = (req) => {
    const authHeader = req.headers['authorization'];
    return authHeader;
}

const authenticate = (req, res, next) => {
    const token = extractToken(req);

    try {
        jwt.verify(token, config.JWT_SECRET);
        next();
    } catch (e) {
        console.log(e)
        res.status(401).send('Not authorised!');
    }
}

export {
    authenticate
}