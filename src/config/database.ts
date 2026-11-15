import mongoose from "mongoose";

export const connectDB = async (): Promise<void> => {
    const mongoUri = process.env.MONGODB_URI;

    if (!mongoUri) {
        throw new Error("Missing environment variable: MONGODB_URI");
    }

    await mongoose.connect(mongoUri);
    console.log(`MongoDB Connected: ${mongoose.connection.host}`);
};
