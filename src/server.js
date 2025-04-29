import Express from "express";
import db from "./config/db.js";
import router from "./routers/router.js";
import routerclie from "./routers/routerClient.js";
import routerCategoria from "./routers/routerCat.js";
import routerproduct from "./routers/routerProduct.js";
import routerVenta from "./routers/ventas.routes.js";
import cors from "cors"; 

async function conectDb() {
    try {
        await db.authenticate();
        await db.sync();
        console.log("✅Conexión exitosa a la BD");
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

server.use("/api/clientes", routerclie);

server.use("/api/categoria", routerCategoria);

server.use("/api/producto", routerproduct);

server.use("/api/ventas", routerVenta);


export default server;