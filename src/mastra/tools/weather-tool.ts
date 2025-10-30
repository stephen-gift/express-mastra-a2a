import { createTool } from "@mastra/core/tools";
import { z } from "zod";
import { weatherClient } from "../../utils/weatherClient";

export const weatherTool = createTool({
  id: "get-weather",
  description: "Get current weather for a location",
  inputSchema: z.object({
    location: z.string().describe("City name")
  }),
  outputSchema: z.object({
    weather: z.string(),
    details: z.object({
      temperature: z.number(),
      feelsLike: z.number(),
      humidity: z.number(),
      windSpeed: z.number(),
      precipProb: z.number(),
      conditions: z.string(),
      icon: z.string().optional()
    })
  }),
  execute: async (context: Record<string, any>) => {
    const { location } = context;

    try {
      const response = await weatherClient.get(`${location}`);
      const data = response.data;
      const current = data.currentConditions;

      const temperature = current?.temp ?? 0;
      const feelsLike = current?.feelslike ?? 0;
      const humidity = current?.humidity ?? 0;
      const windSpeed = current?.windspeed ?? 0;
      const precipProb = current?.precipprob ?? 0;
      const conditions = current?.conditions ?? "Unknown";
      const icon = current?.icon ?? "";

      const weather = `In ${
        response.data.resolvedAddress
      }, it’s currently ${conditions.toLowerCase()} with a temperature of ${temperature}°F (feels like ${feelsLike}°F). Humidity is ${humidity}%, wind speed is ${windSpeed} mph, and chance of rain is ${precipProb}%.`;

      return {
        weather,
        details: {
          temperature,
          feelsLike,
          humidity,
          windSpeed,
          precipProb,
          conditions,
          icon
        }
      };
    } catch (error: any) {
      console.error("Error fetching weather:", error.message);
      return {
        weather: `Failed to fetch weather for ${location}`,
        details: {
          temperature: 0,
          feelsLike: 0,
          humidity: 0,
          windSpeed: 0,
          precipProb: 0,
          conditions: "Unavailable",
          icon: ""
        }
      };
    }
  }
});
