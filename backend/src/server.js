import express from "express"
import dotenv from "dotenv"
import cors from 'cors'
import authRoutes from "./routes/authRoutes.js";
import chatRoutes from "./routes/chatRoutes.js"
import { connectDB } from "./config/dataBase.js";
import authMiddleware from "./middlewares/authMiddleware.js";



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
app.get('/api', (_, res) => {
    res.status(200).json({ message: "home page welcome sir" });
});

app.use('/api/auth', authRoutes);
app.use('/api/home', authMiddleware, chatRoutes);


connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port: ${port}`);
    });
});