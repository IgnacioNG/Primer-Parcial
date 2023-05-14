import express from 'express'
import * as controllers from '../controllers/projects.controllers.js'

const route = express.Router()

route.get('/projects/:section', controllers.getProjects)

export default route