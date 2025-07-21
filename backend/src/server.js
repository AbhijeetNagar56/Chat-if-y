import express from "express"
import dotenv from "dotenv"
import router from "./routes/registration.js";
import home from "./routes/user.js"
import { connectDB } from "./config/dataBase.js";
import authMiddleware from "./middlewares/authMiddleware.js";



dotenv.config();
const app = express();
const port = process.env.PORT || 3000;



app.use(express.json());
app.get('/', (_, res) => {
    res.status(200).json({ message: "home page" });
});


app.use('/user', router);
app.use('/home', home);


connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });
});