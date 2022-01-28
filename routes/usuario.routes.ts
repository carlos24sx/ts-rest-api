import { Router } from "express";
import {
  deleteUsuario,
  getUsuario,
  getUsuarios,
  postUsuario,
  putUsuario,
} from "../controllers/usuarios.controllers";
import { check } from "express-validator";
import { existeEmail } from "../middlewares/usuario.middlewares";

// import { existeEmail } from "../helpers/db-validator.helpers";
//! 4) creamos las rutas de nuestro controlador
const router = Router();

router.get("/", getUsuarios);
router.get("/:id", getUsuario);
router.post("/", [], postUsuario);

router.put(
  "/:id",
  [check("email", "email no valido").isEmail(), existeEmail],
  putUsuario
);
router.delete("/:id", deleteUsuario);

export default router;
