import Server from "./server.js";
import dotenv from "dotenv";
import db from "./config/db.js";

dotenv.config();

const port = process.env.DB_PORT || 5000;


db.sync({ alter: true })
  .then(() => {
    console.log("✅ Base de datos sincronizada correctamente");

    Server.listen(port, () => {
      console.log(`🚀 Servidor iniciado en el puerto ${port}`);
    });
  })
  .catch((error) => {
    console.error("❌ Error al sincronizar la base de datos:", error);
});
