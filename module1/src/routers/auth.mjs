import express from 'express';
import { getToken } from '../controllers/auth.mjs';

const router = express.Router();

router.post('/', async (req, res) => {
    const { nickname } = req.body;
    const { accessToken } = await getToken(nickname);

    if (!accessToken) {
        return res.status(401).send('Unauthorised')
    }

    res.status(200).json({ accessToken })
});

export default router;