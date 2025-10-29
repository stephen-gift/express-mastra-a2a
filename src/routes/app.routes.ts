import { Router } from "express";

const AppRouter: Router = Router();

AppRouter.get("/", (request, response) => {
  response.json({ status: "ok", timestamp: new Date().toISOString() });
});

AppRouter.get("/health", (request, response) => {
  response.status(200).json({
    status: "OK",
    message: "Express-Mastra API is running",
    timestamp: new Date().toISOString()
  });
});

export default AppRouter;
