"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios_controllers_1 = require("../controllers/usuarios.controllers");
const express_validator_1 = require("express-validator");
const usuario_middlewares_1 = require("../middlewares/usuario.middlewares");
// import { existeEmail } from "../helpers/db-validator.helpers";
//! 4) creamos las rutas de nuestro controlador
const router = (0, express_1.Router)();
router.get("/", usuarios_controllers_1.getUsuarios);
router.get("/:id", usuarios_controllers_1.getUsuario);
router.post("/", [], usuarios_controllers_1.postUsuario);
router.put("/:id", [(0, express_validator_1.check)("email", "email no valido").isEmail(), usuario_middlewares_1.existeEmail], usuarios_controllers_1.putUsuario);
router.delete("/:id", usuarios_controllers_1.deleteUsuario);
exports.default = router;
//# sourceMappingURL=usuario.routes.js.map