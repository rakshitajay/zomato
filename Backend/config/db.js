
import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("DB connected");
    } catch (error) {
        // Log full error so the root cause is visible
        console.error("DB connection error:", error);
        // Re-throw so callers can decide how to handle startup failure
        throw error;
    }
};

export default connectDb;