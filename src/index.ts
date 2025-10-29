import express, { Request, Response } from "express";
import app from "./server";
import { PORT } from "./config/env.config";
import { notFoundMiddleware } from "./middlewares/notFound.middleware";
import errorMiddleware from "./middlewares/error.middleware";
import { AppRouter } from "./routes";

app.use("/", AppRouter);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
