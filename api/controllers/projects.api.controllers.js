import * as services from '../../services/projects.services.js'

function getProjects(req, res) {
    const filter = req.query

    services.getProjects(filter)
        .then(function(projects){
            res.status(200).json(projects)
        })
}

function getProjectByCliente(req, res) {
    const clienteId = req.params.clienteId

    services.getProjectByCliente(clienteId)
        .then(function(projects){
            if(projects){
                res.status(201).json(projects)
            }
            else if (projects.length === 0) {
                res.status(404).json({error: {message: `no hay projectos del cliente ${clienteId}`}})
            }
        })
}

function createProject(req, res){
    const project = {
        name: req.body.name,
        description: req.body.description,
        link: req.body.link,
        img: req.body.img,
        technologies: req.body.technologies,
        section: req.body.section,
        cliente_id: req.body.cliente_id
    }

    services.createProject(project)
        .then(function(project){
            res.status(201).json(project)
        })
}

function getProjectById(req, res) {
    const idProject = req.params.idProject

    services.getProjectById(idProject)
     .then(function(project){
        if (project){
            res.status(200).json(project)
        }
        else {
            res.status(404).json({error: {message: `no se encontro el projecto ${idProject}`}})
        }
     })
}

function deleteProject(req, res) {
    const idProject = req.params.idProject

    services.deleteProject(idProject)
        .then(function(project) {
            if (project){  
                res.status(200).json(project)
            }
            else {
                res.status(404).json({error: {message: `no se encontro el projecto ${idProject}`}})
            }
        })
}



function updateProject(req, res) {
    const idProject = req.params.idProject
    const project = {}

    if(req.body.name) {
        project.name = req.body.name
    }
    if(req.body.description) {
        project.description = req.body.description
    }
    if(req.body.link) {
        project.link = req.body.link
    }
    if(req.body.img) {
        project.img = req.body.img
    }
    if(req.body.technologies) {
        project.technologies = req.body.technologies
    }
    if(req.body.section) {
        project.section = req.body.section
    }
    if(req.body.cliente_id) {
        project.cliente_id = req.body.cliente_id
    }

    services.updateProject(idProject, project)
        .then(function(project) {
            if (project){
                res.status(200).json(project)
            } else {
                res.status(404).json({error: {message: `no se encontro el projecto ${idProject}`}})
            }
        })
}




export{
    getProjects,
    createProject,
    getProjectById,
    deleteProject,
    updateProject,
    getProjectByCliente
}