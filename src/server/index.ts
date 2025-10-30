import express, { NextFunction, Request, Response } from "express";
import { type Express } from "express";

const app: Express = express();

app.use((request: Request, response: Response, next: NextFunction) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  response.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  if (request.method === "OPTIONS") {
    response.sendStatus(200);
  } else {
    next();
  }
});

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use((request: Request, response: Response, next: NextFunction) => {
  const logData: Record<string, any> = {
    timestamp: new Date().toISOString(),
    method: request.method,
    path: request.path,
    baseUrl: request.baseUrl
  };

  if (Object.keys(request.params || {}).length) {
    logData.params = request.params;
  }

  if (Object.keys(request.query || {}).length) {
    logData.query = request.query;
  }

  if (
    request.body &&
    typeof request.body === "object" &&
    Object.keys(request.body).length
  ) {
    logData.body = request.body;
  }

  console.log("Incoming Request:", JSON.stringify(logData, null, 2));

  next();
});

export default app;
