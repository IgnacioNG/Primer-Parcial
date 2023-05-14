
import { MongoClient} from "mongodb";

const client = new MongoClient("mongodb://127.0.0.1:27017")
const db = client.db("AH20231CP1")



async function getClientes() {
    await client.connect()

    return db.collection("Cliente").find().toArray()
}


async function createCliente(cliente) {
    await client.connect()

    await db.collection('Cliente').insertOne(cliente)

    return cliente
}



export{
    getClientes,
    createCliente
}