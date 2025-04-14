import { Router } from "express";
import { 
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct } from "../handlers/product.js"

const routerproduct = Router();

routerproduct.get("/", getProducts);

routerproduct.post("/", createProduct);

routerproduct.put("/:id", updateProduct);

routerproduct.delete("/:id", deleteProduct);

export default routerproduct;