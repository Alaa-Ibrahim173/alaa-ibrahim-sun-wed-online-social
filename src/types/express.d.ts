
import "express";

declare global {
    namespace Express {
        interface Response {
            success(
                data?: unknown,
                message?: string,
                statusCode?: number
            ): this;
        }
    }
}

export {};
