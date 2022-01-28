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
exports.existeEmail = void 0;
const usuario_models_1 = __importDefault(require("../models/usuario.models"));
const existeEmail = (res, email = "") => __awaiter(void 0, void 0, void 0, function* () {
    const existeEmail = yield usuario_models_1.default.findOne({
        where: {
            email: email,
        },
    });
    if (existeEmail) {
        return res.status(404).json({ msg: "Email ya existe" });
    }
});
exports.existeEmail = existeEmail;
//# sourceMappingURL=db-validator.helpers.js.map