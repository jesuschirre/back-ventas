import { request, response } from "express";
import User from "../models/usuarios.model.js";

export const getUsers = async (req = request, res = response) => {
  try {
    const users = await User.findAll();
    console.log("Usuarios obtenidos:", users);
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}


export const createUser = async (req = request, res = response) => {
    try {
      const user = await User.create(req.body);
  
      console.log("Usuario creado:", user);
      res.status(201).json({ data: user });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Error al crear el usuario",
        error,
      });
    }
  }

  export const deleteUser = async (req = request, res = response) => {
    try {
      const { id } = req.params;
  
      const user = await User.findByPk(id);
  
      if (!user) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }
  
      await user.destroy();
      res.status(200).json({ message: "Usuario eliminado correctamente" });
      res.json({ message: "Usuario eliminado correctamente" });
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error al eliminar el usuario", error });
    }
  };
  