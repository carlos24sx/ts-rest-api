import { Response } from "express";
import Usuario from "../models/usuario.models";

export const existeEmail = async (res: Response, email: string = "") => {
  const existeEmail = await Usuario.findOne({
    where: {
      email: email,
    },
  });

  if (existeEmail) {
    return res.status(404).json({ msg: "Email ya existe" });
  }
};
