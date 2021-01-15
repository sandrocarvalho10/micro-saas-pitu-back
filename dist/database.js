"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('mysql://root:teste1234@localhost:3306/micro_saas_pitu');
// const sequelize = new Sequelize('mongodb+srv://micro_saas:teste1234@cluster0.uud2m.mongodb.net/micro_saas_pitu?retryWrites=true&w=majority');
exports.default = sequelize;
