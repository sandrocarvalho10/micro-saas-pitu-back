"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('mysql://root:teste1234@localhost:3306/micro_saas_pitu');
exports.default = sequelize;
