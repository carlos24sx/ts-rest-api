"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUsuario = exports.getUsuarios = void 0;
const usuario_models_1 = __importDefault(require("../models/usuario.models"));
// ! 3 creamos nuestro controllador con los servicios base sin codigo
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarios = yield usuario_models_1.default.findAll();
    res.json({
        msg: "get Usuarios",
        usuarios,
    });
});
exports.getUsuarios = getUsuarios;
const getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield usuario_models_1.default.findByPk(id);
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
});
exports.getUsuario = getUsuario;
const postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        // const { nombre, email } = body;
        const existeEmail = yield usuario_models_1.default.findOne({
            where: {
                email: body.email,
            },
        });
        if (existeEmail) {
            return res.status(404).json({
                msg: "Email invalido",
            });
        }
        const usuario = usuario_models_1.default.build(body);
        yield usuario.save();
        res.json({
            usuario,
        });
    }
    catch (err) {
        res.status(500).json({
            msg: "Hable con el admin",
        });
    }
});
exports.postUsuario = postUsuario;
const putUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        // const { nombre, email } = body;
        const usuario = yield usuario_models_1.default.findByPk(id);
        // console.log(usuario);
        if (!usuario) {
            return res.status(404).json({ msg: "Usuario no encontrado" });
        }
        yield usuario.update(body);
        res.json({
            usuario,
        });
    }
    catch (err) {
        res.status(500).json({
            msg: "Hable con el admin",
        });
    }
});
exports.putUsuario = putUsuario;
const deleteUsuario = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: "Delete Usuarios",
        id,
    });
};
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=usuarios.controllers.js.map