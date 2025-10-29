// write a func getErrorMessage that takes an unknown error and returns its message as a string
export const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message;
  }

  if (error && typeof error === "object" && "message" in error) {
    return String(error.message);
  }

  if (typeof error === "string") {
    return error;
  }
  return "An unknown error occurred";
};

// export const getStatusCode = (error: unknown): number => {
//   if (error && typeof error === "object" && "statusCode" in error) {
//     return Number(error.statusCode);
//   }

//   if (error && typeof error === "object" && "code" in error) {
//     return Number(error.code);
//   }

//   return 500;
// };

export const getStatusCode = (error: unknown): number => {
  if (
    typeof error === "object" &&
    error !== null &&
    ("statusCode" in error || "code" in error)
  ) {
    const code = (error as any).statusCode || (error as any).code;

    if (typeof code === "number" && code >= 400 && code < 600) {
      return code;
    }
  }

  return 500;
};
