import { DataTypes } from "sequelize";
import db from "../db/connection.db";

const Usuario = db.define("Usuario", {
  nombre: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  estado: {
    type: DataTypes.NUMBER,
  },
});

export default Usuario;
