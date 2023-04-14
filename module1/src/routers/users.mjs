import express from 'express';
import { getUsers, createUser } from '../controllers/users.mjs';
import { authenticate } from '../middleware/auth.mjs';

const router = express.Router();

router.get('/', async (req, res) => {
    const users = await getUsers();
    res.send(users);
});

router.post('/', authenticate, async (req, res) => {
    const result = await createUser(req.body);
    res.send(result);
});

export default router;