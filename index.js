
import express from "express"
import dotenv from "dotenv"
dotenv.config()
import connectDb from "./config/db.js"
import cookieParser from "cookie-parser"
import authRouter from "./routes/auth.routes.js"
import cors from "cors"

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true


}))
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRouter);

// Start server only after DB connection succeeds
const start = async () => {
    try {
        await connectDb();
        app.listen(port, () => {
            console.log(`server is running on port ${port}`);
        });
    } catch (err) {
        console.error("Failed to start server:", err);
        process.exit(1);
    }
};

start();