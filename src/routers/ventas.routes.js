import express from "express";
import  { crearVenta, obtenerVentas } from "../handlers/venta.js";

const routerVenta = express.Router();

routerVenta.post("/", crearVenta);
routerVenta.get("/", obtenerVentas);

export default routerVenta;