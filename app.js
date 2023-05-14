import express from 'express'
import projectRoute from './routes/projects.routes.js'
import projectApiRoute from './api/routes/projects.api.routes.js'
import cilenteApiRoute from './api/routes/clientes.api.routes.js'

const app = express() 
app.use(express.urlencoded({ extended: true }))
app.use('/', express.static('public'))
app.use('/api', express.json())
app.use('/', projectRoute)
app.use('/api', projectApiRoute, cilenteApiRoute)



app.listen(2222, function() {
    console.log('servidor host http://localhost:2222')
})