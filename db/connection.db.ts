import { Sequelize } from "sequelize";

const db = new Sequelize(
  "BD_TI_PRUEBAS_BIENESTAR",
  "academico",
  "Academico2020*",
  {
    dialect: "mssql",
    host: "bd_bienestar",
    schema:"Bienestar",
    define: {
      timestamps: false,
    },
  }
);
// const db = new Sequelize(
//   "mssql://academico:Academico2020*@bd_bienestar/BD_TI_PRUEBAS_BIENESTAR"
// );
export default db;
