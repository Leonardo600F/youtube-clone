export class AppError extends Error {
    constructor(
        message: string,
        public StatusCode?: number
    ) {
        super(message);
        this.name = "AppError";

    }
}