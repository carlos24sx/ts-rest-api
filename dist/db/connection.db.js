"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize("BD_TI_PRUEBAS_BIENESTAR", "academico", "Academico2020*", {
    dialect: "mssql",
    host: "bd_bienestar",
    schema: "Bienestar",
    define: {
        timestamps: false,
    },
});
// const db = new Sequelize(
//   "mssql://academico:Academico2020*@bd_bienestar/BD_TI_PRUEBAS_BIENESTAR"
// );
exports.default = db;
//# sourceMappingURL=connection.db.js.map