// src/utils/weatherClient.ts
import axios from "axios";
import {
  API_TIMEOUT,
  WEATHER_API_KEY,
  WEATHER_BASE_URL
} from "../config/env.config";

export const weatherClient = axios.create({
  baseURL: WEATHER_BASE_URL,
  timeout: parseInt(API_TIMEOUT!),
  params: {
    key: WEATHER_API_KEY
  }
});
