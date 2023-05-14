import * as services from '../services/projects.services.js'
import * as views from '../views/projects.views.js'


function getProjects(req, res){
    const section = req.params.section 
    services.getProjectsBySection(section)
    .then(function(projects){
        if(projects){
            res.send(views.createPageProjects(projects))
        } 
        else {
            res.send(views.createPage('pagina no encontrada', '<p>No se encontro la pagina solicitada</p>'))
        }
    })
}

export {
    getProjects
}