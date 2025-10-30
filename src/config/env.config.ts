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
  APP_DEBUG,
  GOOGLE_GENERATIVE_AI_API_KEY,
  WEATHER_API_KEY,
  WEATHER_BASE_URL,
  API_TIMEOUT
} = process.env;
