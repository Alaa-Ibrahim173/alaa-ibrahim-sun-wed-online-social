
export class AppException extends Error {
    public statusCode: number;
    public details?: unknown;

    constructor(
        message: string,
        statusCode: number = 500,
        details?: unknown
    ) {
        super(message);

        this.name = "AppException";
        this.statusCode = statusCode;
        this.details = details;

        Error.captureStackTrace(this, this.constructor);
    }
}

