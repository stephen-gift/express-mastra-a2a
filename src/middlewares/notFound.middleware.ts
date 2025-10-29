import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/appError";

export const notFoundMiddleware = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  throw new AppError(`Route ${request.originalUrl} not found`, 404);
};
