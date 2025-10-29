import { config } from "dotenv";

config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
  debug: process.env.APP_DEBUG === "true" ? true : false
});

export const {
  PORT,
  SERVER_URL,
  NODE_ENV,
  GEMINI_API_KEY,
  TMDB_API_KEY,
  APP_DEBUG
} = process.env;
