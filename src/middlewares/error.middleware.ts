import { Request, Response, NextFunction } from "express";
import { getErrorMessage, getStatusCode } from "../utils";
import { ErrorResponse } from "../types";

const errorMiddleware = (
  error: unknown,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (response.headersSent) {
    next(error);
    return;
  }

  const statusCode = getStatusCode(error);

  const errorResponse: ErrorResponse = {
    status: "error",
    message: getErrorMessage(error) || "Internal Server Error",
    timestamp: new Date().toISOString(),
    statusCode
  };

  response.status(statusCode).json(errorResponse);
};

export default errorMiddleware;
