import bcrypt from "bcrypt";
import { NextFunction, Request, Response } from "express";

import { PrismaClient } from "@prisma/client";

import { authValidator } from "../validators/auth.validator";

const prisma = new PrismaClient();

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = authValidator.parse(req.body);
    const hashed = await bcrypt.hash(data.password, 10);

    const user = await prisma.user.create;
  } catch (error) {}
};
