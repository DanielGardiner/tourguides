class UnauthorisedError extends Error {
  constructor(message) {
    super(message || "Unauthorised error");
    this.name = "UnauthorisedError";
    this.code = 401;
  }
}

export default UnauthorisedError;
