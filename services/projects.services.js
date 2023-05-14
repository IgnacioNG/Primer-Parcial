
import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb://127.0.0.1:27017")
const db = client.db("AH20231CP1")



async function getProjectsBySection(section) {
    await client.connect()
    
    return db.collection("Projects").find({section: {$eq: section}, deleted: {$ne: true}}).toArray()
}



async function getProjectByCliente(clienteId) {
    await client.connect()

    return db.collection("Projects").find({cliente_id: {$eq: clienteId}}).toArray()
}


async function getProjects(filter = {}) {
    const filters = {deleted: {$ne: true}}

    if(filter?.section){
        filters.section = {$eq: filter.section}
    }
    if(filter?.technologies) {
        filters.technologies = {$all: filter.technologies.split(';')}
    }

    await client.connect()

    return db.collection("Projects").find(filters).toArray()
}



async function createProject(project) {
    await client.connect()

    await db.collection('Projects').insertOne(project)

    return project
}


async function getProjectById(idProject) {
    await client.connect()

    return db.collection('Projects').findOne({_id: new ObjectId(idProject)})
}


async function deleteProject(idProject) {
    await client.connect()

    await db.collection('Projects').deleteOne({_id: new ObjectId(idProject)})

    return {
        id: idProject
    }
}


async function updateProject(idProject, project) {
    await client.connect()

    await db.collection("Projects").updateOne({_id: new ObjectId(idProject)}, {$set: project})

    return project
}




export {
    getProjectsBySection,
    getProjects,
    createProject,
    getProjectById,
    deleteProject,
    updateProject,
    getProjectByCliente
}