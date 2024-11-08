import express from "express"
import cors from 'cors'

import conn from "./config/conn.js"
import Empresa from "./models/empresaModel.js"
import Publicacao from "./models/publicacaoModel.js"
import Curtida from "./models/curtidaModel.js"

const app = express()


app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

conn
  .sync()
  .then()
  .catch((error)=> console(error))

app.use("/api/empresas", EmpresaRouter)

app.use((request, response)=>{
    response.status(404).json({msg: "Rota não encontrada"})
})

export default app