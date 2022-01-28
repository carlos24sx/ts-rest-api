import express, { Application } from "express";
import userRoutes from "../routes/usuario.routes";
import cors from "cors";
import db from "../db/connection.db";

// * 1) Creamos servidor de express
class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    usuarios: "/api/usuarios",
  };

  //   !------------------------------
  //   !------------------------------

  constructor() {
    //   *1.1 configuracion del servidor
    this.app = express();
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

  async dbConnection() {
    try {
      await db.authenticate();
      console.log("Database Online");
    } catch (error: any) {
      throw new Error(error);
    }
  }
  //   !------------------------------
  //   !------------------------------

  //  *7) creamos los middlewares
  middlewares() {
    // *8) cofiguracion de los Cors
    this.app.use(cors());

    // *9) Permitimo Lectura del body
    this.app.use(express.json());

    // * 10) servimos contenido estatico de la Carpeta publica
    this.app.use(express.static("public"));
  }
  //   !------------------------------
  //   !------------------------------
  //   * 5) creamos la funcion de las rutas por la cual express permitira las peticiones
  routes() {
    this.app.use(this.apiPaths.usuarios, userRoutes);
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

export default Server;
