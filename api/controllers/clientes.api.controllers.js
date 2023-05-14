import * as services from '../../services/cliente.services.js'

function getClientes(req, res) {
    services.getClientes()
        .then(function(clientes){
            res.status(200).json(clientes)
        })
}


function createCliente(req, res){
    const cliente = {
        name: req.body.name,
        img: req.body.img,
        description: req.body.description,
        project_id: req.body.project_id
    }

    services.createCliente(cliente)
        .then(function(cliente){
            res.status(201).json(cliente)
        })
}



export {
    getClientes,
    createCliente
}