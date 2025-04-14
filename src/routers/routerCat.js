import { Router } from "express";
import { 
    getCategorias,
    createCategoria,
    updateCategoria,
    deleteCategoria } from "../handlers/categoria.js"

const routerCategoria = Router();

routerCategoria.get("/", getCategorias);

routerCategoria.post("/", createCategoria);

routerCategoria.put("/:id", updateCategoria);

routerCategoria.delete("/:id", deleteCategoria);

export default routerCategoria;