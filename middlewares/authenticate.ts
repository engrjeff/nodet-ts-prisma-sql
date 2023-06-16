import { RequestHandler } from "express";

export const authenticate: RequestHandler = async (req, res, next) => {
  req.userId = "cliymm6tl0000vlwk1ysonkh6";

  next();
};
