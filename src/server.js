import Express from "express";
import db from "./config/db.js";
import router from "./router.js";
import cors from "cors"; 

async function conectDb() {
    try {
        await db.authenticate();
        await db.sync();
        console.log("✅ Conexión exitosa a la BD");
    } catch (error) {
        console.log(error);
        console.log("error al conectar la base de datos")
    }
}

conectDb();
const server = Express()

// Usar cors como middleware
server.use(cors());

// Leer datos de formularios (JSON)
server.use(Express.json());

server.use("/api/usuarios", router);


export default server;