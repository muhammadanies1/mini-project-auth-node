import { Response } from "express";

export const sendResponse = (
  res: Response,
  code: number,
  success: boolean,
  message: string,
  data: any = null
) => {
  return res.status(code).json({
    code,
    success,
    message,
    data,
    timestamp: new Date().toISOString(),
  });
};
