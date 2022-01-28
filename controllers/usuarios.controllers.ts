import { Request, Response } from "express";
import Usuario from "../models/usuario.models";

// ! 3 creamos nuestro controllador con los servicios base sin codigo
export const getUsuarios = async (req: Request, res: Response) => {
  const usuarios = await Usuario.findAll();

  res.json({
    msg: "get Usuarios",
    usuarios,
  });
};
export const getUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;

  const usuario = await Usuario.findByPk(id);
  if (!usuario) {
    res.status(404).json({
      msg: "Usuario no encontrado",
    });
  }
  res.json({
    msg: "get Usuario",
    usuario,
    id,
  });
};

export const postUsuario = async (req: Request, res: Response) => {
  const { body } = req;
  try {
    // const { nombre, email } = body;

    const existeEmail = await Usuario.findOne({
      where: {
        email: body.email,
      },
    });

    if (existeEmail) {
      return res.status(404).json({
        msg: "Email invalido",
      });
    }

    const usuario = Usuario.build(body);

    await usuario.save();
    res.json({
      usuario,
    });
  } catch (err: any) {
    res.status(500).json({
      msg: "Hable con el admin",
    });
  }
};

export const putUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  try {
    // const { nombre, email } = body;
    const usuario = await Usuario.findByPk(id);
    // console.log(usuario);
    if (!usuario) {
      return res.status(404).json({ msg: "Usuario no encontrado" });
    }

    await usuario.update(body);

    res.json({
      usuario,
    });
  } catch (err: any) {
    res.status(500).json({
      msg: "Hable con el admin",
    });
  }
};

export const deleteUsuario = (req: Request, res: Response) => {
  const { id } = req.params;

  res.json({
    msg: "Delete Usuarios",
    id,
  });
};
