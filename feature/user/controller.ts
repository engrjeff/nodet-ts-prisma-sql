import { RequestHandler } from "express";
import * as User from "./model";
import { ErrorResponse } from "../../middlewares/error-handler";

export const getList: RequestHandler = async (req, res, next) => {
  try {
    const users = await User.getUsers();

    res.json({
      success: true,
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

export const getById: RequestHandler = async (req, res, next) => {
  try {
    const foundUser = await User.getUserById(req.params.id);

    if (!foundUser) return next(new ErrorResponse("User not found", 404));

    const { password, ...user } = foundUser;

    res.json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

export const create: RequestHandler = async (req, res, next) => {
  try {
    const newUser = await User.createUser(req.body);

    res.json({
      success: true,
      data: newUser,
    });
  } catch (error) {
    next(error);
  }
};
