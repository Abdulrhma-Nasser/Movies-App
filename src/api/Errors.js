export class APIError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

export class RequestError extends Error {
  constructor(message) {
    super(message);
  }
}
export class NetworkError extends Error {
  constructor() {
    super("Network Error: No response received");
  }
}
export class ApiServiceError extends Error {
  constructor(serviceType, message, originalError) {
    super(`[${serviceType}] ${message}`);
    this.serviceType = serviceType; // "Movie" or "TV"
    this.originalError = originalError; // Original Axios/API error
  }
}