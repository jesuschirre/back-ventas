import Server from "./server.js"
import dotenv from "dotenv";

dotenv.config();

const port = process.env.DB_PORT || 5000

Server.listen( port, () => {
    console.log("server iniciado en el puerto 5000")
    
})