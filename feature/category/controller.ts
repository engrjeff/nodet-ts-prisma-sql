import { RequestHandler } from "express";
import * as Category from "./model";
import { ErrorResponse } from "../../middlewares/error-handler";

const UnauthorizedError = new ErrorResponse("Unauthorized", 403);

export const getList: RequestHandler = async (req, res, next) => {
  try {
    if (!req.userId) return next(UnauthorizedError);

    const categories = await Category.getCategories(req.userId);

    res.json({
      success: true,
      data: categories,
    });
  } catch (error) {
    next(error);
  }
};
