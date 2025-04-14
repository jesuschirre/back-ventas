import { request, response } from "express";
import Categoria from "../models/categorias.model.js";

export const getCategorias = async (req = request, res = response) => {
    try {
        const categorias = await Categoria.findAll();
        console.log("Categorias obtenidas:", categorias);
        res.json(categorias);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const createCategoria = async (req = request, res = response) => {
    try {
        const categoria = await Categoria.create(req.body);
        console.log("Categoria creada:", categoria);
        res.status(201).json({ data: categoria });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error al crear la categoria",
            error,
        });
    }
}

export const updateCategoria = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const { nombre } = req.body;

        const categoria = await Categoria.findByPk(id);
        if (!categoria) {
            return res.status(404).json({ message: "Categoria no encontrada" });
        }

        categoria.nombre = nombre;
        await categoria.save();

        return res.status(200).json({
            message: "Categoria actualizada correctamente",
            categoria,
        });

    } catch (error) {
        console.error("Error al actualizar categoria:", error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
};

export const deleteCategoria = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const categoria = await Categoria.findByPk(id);
        if (!categoria) {
            return res.status(404).json({ message: "Categoria no encontrada" });
        }
        await categoria.destroy();
        res.status(200).json({ message: "Categoria eliminada correctamente" });
        res.json({ message: "Categoria eliminada correctamente" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al eliminar la categoria", error });
    }
}