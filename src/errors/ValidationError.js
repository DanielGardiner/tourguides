class ValidationError extends Error {
  constructor(message) {
    super(message || "Validation error");
    this.name = "ValidationError";
    this.code = 403;
  }
}

export default ValidationError;
