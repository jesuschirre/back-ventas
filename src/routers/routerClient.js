import { Router } from "express";
import { 
    getClients,
    createClient,
    updateClient,
    deleteClient } from "../handlers/client.js"

const routerclie = Router();

routerclie.get("/", getClients);

routerclie.post("/", createClient);

routerclie.put("/:id", updateClient);

routerclie.delete("/:id", deleteClient);

export default routerclie;