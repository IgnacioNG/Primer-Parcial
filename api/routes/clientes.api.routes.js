import express from 'express'
import * as controllers from '../controllers/clientes.api.controllers.js'


const route = express.Router()

route.get('/clientes', controllers.getClientes)
route.post('/clientes', controllers.createCliente)



export default route