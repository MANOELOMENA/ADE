import { DataTypes } from "sequelize";
import conn from '../config/conn.js'
import Publicacao from "./publicacaoModel.js";
import Usuario from "./usuarioModel.js";

const Curtida = conn.define("curtidas", {
    tipo_avaliacao:{
        type: DataTypes.ENUM(["up", "down"])
    },
    usuario_id:{
        type: DataTypes.INTEGER,
        references:{
            model: Usuario,
            key: "id"
        },
        onDelete: "CASCADE"
    },
    publicacao_id:{
        type: DataTypes.INTEGER,
        references:{
            model: Publicacao,
            key: "id"
        },
        onDelete: "CASCADE"
    },
})

Usuario.belongsToMany(Publicacao, {
    through: Curtida,
    foreignKey: "usuario_id",
     
})

export default Curtida