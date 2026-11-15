"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connectDB = async () => {
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
        throw new Error("Missing environment variable: MONGODB_URI");
    }
    await mongoose_1.default.connect(mongoUri);
    console.log(`MongoDB Connected: ${mongoose_1.default.connection.host}`);
};
exports.connectDB = connectDB;
