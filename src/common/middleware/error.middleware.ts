
import { Request, Response, NextFunction } from "express";
import { AppException } from "../exceptions/app.exception";

export const errorMiddleware = (
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction
): void => {

    if (res.headersSent) {
        next(error);
        return;
    }

    if (error instanceof AppException) {
        res.status(error.statusCode).json({
            success: false,
            message: error.message,
            details: error.details
        });

        return;
    }

    console.error(error);

    res.status(500).json({
        success: false,
        message: "Internal Server Error"
    });
};
