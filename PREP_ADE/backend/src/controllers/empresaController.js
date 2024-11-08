import Curtida from "../models/curtidaModel";
import Empresa from "../models/empresaModel";

export const getEmpresa = async (req, res) => {

    try {
        const infoEmpresa = await Empresa.findByPk(1, {raw: true})
        
        const likes = await Curtida.count({
            where: {
                tipo_avaliacao: "up",
            },
        })
        const deslikes = await Curtida.count({
            where: {
                tipo_avaliacao: "down"
            },
        })

        infoEmpresa.likes = likes
        infoEmpresa.deslikes = deslikes
        response.status(200).json()
    } catch (error) {
        
    }
}

