export interface ErrorResponse {
  status: "error";
  message: string;
  timestamp: string;
  statusCode?: number;
}

export interface ServiceResult<T> {
  success: boolean;
  data?: T;
  error?: string;
}
