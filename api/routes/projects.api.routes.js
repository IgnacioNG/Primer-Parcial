import express from 'express'
import * as controllers from '../controllers/projects.api.controllers.js'

const route = express.Router()

route.get('/projects', controllers.getProjects)
route.post('/projects', controllers.createProject)
route.get('/projects/:idProject', controllers.getProjectById)
route.delete('/projects/:idProject', controllers.deleteProject)
route.patch('/projects/:idProject', controllers.updateProject)
route.get('/projects/cliente/:clienteId', controllers.getProjectByCliente)

export default route