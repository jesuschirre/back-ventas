import { request, response } from "express";
import clients from "../models/clientes.model.js";

export const getClients = async (req = request, res = response) => {
    try {
        const clientsList = await clients.findAll();
        console.log("Clientes obtenidos:", clientsList);
        res.json(clientsList);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const createClient = async (req = request, res = response) => {
    try {
        const client = await clients.create(req.body);
        console.log("cliente creado:", client);
        res.status(201).json({ data: client });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error al crear el cliente",
            error,
        });
    }
}

export const updateClient = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const { nombre, telefono } = req.body;

        const client = await clients.findByPk(id);
        if (!client) {
            return res.status(404).json({ message: "Cliente no encontrado" });
        }

        client.nombre = nombre;
        client.telefono = telefono;
        await client.save();

        return res.status(200).json({
            message: "Cliente actualizado correctamente",
            client,
        });

    } catch (error) {
        console.error("Error al actualizar cliente:", error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
};

export const deleteClient = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const client = await clients.findByPk(id);
        if (!client) {
            return res.status(404).json({ message: "Cliente no encontrado" });
        }
        await client.destroy();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al eliminar el cliente", error });
    }
}
