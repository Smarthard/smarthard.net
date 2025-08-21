import { NextFunction, Request, Response } from 'express';
import { Logger } from 'pino';

export function logMiddleware(logger: Logger) {
    return (req: Request, res: Response, next: NextFunction) => {
        const { ip, url, httpVersion, headers } = req;
        const { origin = '-', 'user-agent': userAgent = 'NO USER AGENT' } = headers || {};
        const { statusCode } = res;
        const date = new Date()
        const datetime = `${date.toLocaleDateString()}:${date.toLocaleTimeString()}`;

        logger.info(`${ip} ${datetime} "${url} HTTP/${httpVersion}" ${statusCode} "${origin}" ${userAgent}`);
    }
}
