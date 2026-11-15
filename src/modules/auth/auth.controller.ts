
import { Request, Response } from "express";
import { RegisterDTO } from "./dto/register.dto";

export const registerController = (
  req: Request,
  res: Response
) => {
  const userData: RegisterDTO = req.body;

  return res.status(201).json({
    success: true,
    message: "Validation completed successfully",
    data: userData,
  });
};
