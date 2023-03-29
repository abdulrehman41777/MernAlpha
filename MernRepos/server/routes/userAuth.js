import User from '../models/userAuth.js';
import jwt from 'jsonwebtoken';
import express  from 'express';
import bcrypt from 'bcrypt';


const JWT_SECRET_KEY = "secretKey69"

const router = express.Router();

router.post('/register', async (req, res) => {

    try {
        const {  email, password } = req.body;

        const securedPass = await bcrypt.hash(password, 10);

        const newUser = new User({
            email,
            password: securedPass,
        });

        const saveUser = await newUser.save();
        res.status(200).json(saveUser);

    } catch (error) {
        res.status(500).json(error);
        console.log(error)
    }
});


router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);


        const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET_KEY);


        if (!isPasswordMatch) {
            return res.status(400).json({ error: 'Wrong password' });
        } else {
            res.status(200).json({ message: 'Logged In', token });
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;