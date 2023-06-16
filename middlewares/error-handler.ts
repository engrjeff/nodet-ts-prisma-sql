import { ErrorRequestHandler } from "express";

export class ErrorResponse extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let error = { ...err };

  error.message = err.message;

  res.status(error.statusCode || 500).json({
    status: "failed",
    error: error.message || "Server Error",
  });
};
