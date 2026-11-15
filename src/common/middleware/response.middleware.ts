
import { Request, Response, NextFunction } from "express";

export const responseMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {

    res.success = (
        data: unknown = null,
        message: string = "Success",
        statusCode: number = 200
    ) => {

        return res.status(statusCode).json({
            success: true,
            message,
            data
        });
    };

    next();
};
