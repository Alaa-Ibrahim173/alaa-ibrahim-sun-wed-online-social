import express from "express";
import cors from "cors";
import helmet from "helmet";

import { bindServices } from "./common/services/service.binding";
import { testController } from "./modules/user/user.controller";
import { responseMiddleware } from "./common/middleware/response.middleware";
import { errorMiddleware } from "./common/middleware/error.middleware";
import { AppException } from "./common/exceptions/app.exception";
import authRoutes from "./modules/auth/auth.routes";

const app = express();

// Register Services
bindServices();

// Global Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
//app.get("/", testController);
app.use("/auth", authRoutes);

export default app;
app.use(responseMiddleware);

app.get("/success", (req, res) => {
    res.success(
        { name: "Alaa" },
        "User retrieved successfully"
    );
});

app.get("/error", (req, res, next) => {
    next(new AppException("User not found", 404));
});

// Error middleware must be LAST
app.use(errorMiddleware);