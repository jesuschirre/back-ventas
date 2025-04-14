import { request, response } from "express";
import products from "../models/products.model.js";

export const getProducts = async (req = request, res = response) => {
    try {
        const product = await products.findAll();
        console.log("Productos obtenidos:", product);
        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const createProduct = async (req = request, res = response) => {
    try {
        const product = await products.create(req.body);
        console.log("Producto creado:", product);
        res.status(201).json({ data: product });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al crear el producto", error,});
    }
}

export const updateProduct = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const { nombre, precio, stock } = req.body;
        const { catid } = req.body;
        const product = await products.findByPk(id);
        if (!product) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }
        product.nombre = nombre;
        product.precio = precio;
        product.stock = stock;
        product.catid = catid;
        await product.save();
        return res.status(200).json({
            message: "Producto actualizado correctamente",
            product,
        });
    } catch (error) {
        console.error("Error al actualizar producto:", error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
}
export const deleteProduct = async (req = request, res = response) => {
    try {
        const {id }= req.params;
        const product = await products.findByPk(id);
        if (!product) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }
        await product.destroy();
        res.status(200).json({ message: "Producto eliminado correctamente" });
        res.json({ message: "Producto eliminado correctamente" });
    } catch (error) {
        
    }
}