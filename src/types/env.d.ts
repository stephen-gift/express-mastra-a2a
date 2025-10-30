declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV?: "development" | "production";
    PORT?: string;
    SERVER_URL?: string;
    APP_DEBUG?: string;
    TMDB_API_KEY?: string;
    GEMINI_API_KEY?: string;
    GOOGLE_GENERATIVE_AI_API_KEY?: string;
    WEATHER_API_KEY?: string;
    WEATHER_BASE_URL?: string;
    API_TIMEOUT?: string;
  }
}
