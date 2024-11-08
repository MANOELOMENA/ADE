import { DataTypes } from "sequelize";
import conn from "../config/conn.js";
import Empresa from "./empresaModel.js";

const Publicacao = conn.define("Publicação", {

})

// 1 : N
Empresa.hasMany(Publicacao,{
    foreignKey: 'id_empresa'
})
Publicacao.belongsTo(Empresa,{
    foreignKey: 'id_empresa'
})

export default Publicacao