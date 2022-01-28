import { NextFunction, Request, Response } from "express";
import Usuario from "../models/usuario.models";

export const existeEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.body.email) {
    const existeEmail = await Usuario.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (existeEmail) {
      return res.status(404).json({ msg: "ya existe el email" });
    }
    next();
  }
};
