import Venta from "../models/venta.model.js";
import DetalleVenta from "../models/detalleVenta.model.js";

export const crearVenta = async (req, res) => {
  const { clienteId, productos } = req.body;

  try {
    // Calcular total
    const total = productos.reduce((acc, p) => acc + p.precio * p.cantidad, 0);

    // Crear venta
    const venta = await Venta.create({ clienteId, total });

    // Crear detalles
    const detalles = productos.map(p => ({
      ventaId: venta.id,
      productoId: p.productoId,
      cantidad: p.cantidad,
      subtotal: p.precio * p.cantidad,
    }));

    await DetalleVenta.bulkCreate(detalles);

    res.status(201).json({ venta, detalles });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al registrar la venta" });
  }
};

export const obtenerVentas = async (req, res) => {
  try {
    const ventas = await Venta.findAll({
      include: DetalleVenta,
      order: [["createdAt", "DESC"]],
    });
    res.json(ventas);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener ventas" });
  }
};
