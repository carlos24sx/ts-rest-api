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
const express_1 = __importDefault(require("express"));
const usuario_routes_1 = __importDefault(require("../routes/usuario.routes"));
const cors_1 = __importDefault(require("cors"));
const connection_db_1 = __importDefault(require("../db/connection.db"));
// * 1) Creamos servidor de express
class Server {
    //   !------------------------------
    //   !------------------------------
    constructor() {
        this.apiPaths = {
            usuarios: "/api/usuarios",
        };
        //   *1.1 configuracion del servidor
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "8000";
        // * 12 Conexion a la bd
        this.dbConnection();
        // * 11) middlewares
        this.middlewares();
        // *6) definir rutas
        this.routes();
    }
    //   !------------------------------
    //   !------------------------------
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_db_1.default.authenticate();
                console.log("Database Online");
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    //   !------------------------------
    //   !------------------------------
    //  *7) creamos los middlewares
    middlewares() {
        // *8) cofiguracion de los Cors
        this.app.use((0, cors_1.default)());
        // *9) Permitimo Lectura del body
        this.app.use(express_1.default.json());
        // * 10) servimos contenido estatico de la Carpeta publica
        this.app.use(express_1.default.static("public"));
    }
    //   !------------------------------
    //   !------------------------------
    //   * 5) creamos la funcion de las rutas por la cual express permitira las peticiones
    routes() {
        this.app.use(this.apiPaths.usuarios, usuario_routes_1.default);
    }
    //   !------------------------------
    //   !------------------------------
    //   * 2) creamos el metodo en el cual le decimos el puerto en que correra el server
    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo en puerto", this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map