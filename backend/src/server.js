import express from "express"
import dotenv from "dotenv"
import cors from 'cors'
import authRoutes from "./routes/authRoutes.js";
import chatRoutes from "./routes/chatRoutes.js"
import { connectDB } from "./config/dataBase.js";
import authMiddleware from "./middlewares/authMiddleware.js";
import User from "./models/User.js";



dotenv.config();
const app = express();
const port = process.env.PORT;


// middlewares
app.use(
    cors({
        origin: "http://localhost:5173",
    })
);
app.use(express.json());
app.get('/api', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json( users );
    } catch (error) {
        console.log(error);
        res.status(404).json({ msg:"no users"});
    }
    
});

app.use('/api/auth', authRoutes);
app.use('/api/home', authMiddleware, chatRoutes);


connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port: ${port}`);
    });
});