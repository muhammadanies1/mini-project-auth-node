import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

import { sendResponse } from "../utils/response";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ZodError) {
    return sendResponse(res, 400, false, "Validation Error", err.flatten());
  }

  console.log(err);
  return sendResponse(res, 500, false, "Internal Server Error");
};
