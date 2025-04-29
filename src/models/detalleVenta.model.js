import { DataTypes } from "sequelize";
import db from "../config/db.js";
import Venta from "./venta.model.js";

const DetalleVenta = db.define("DetalleVenta", {
  ventaId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  productoId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  subtotal: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
}, {
  tableName: "detalle_ventas",
  timestamps: false,
});

// Relaciones
Venta.hasMany(DetalleVenta, { foreignKey: "ventaId" });
DetalleVenta.belongsTo(Venta, { foreignKey: "ventaId" });

export default DetalleVenta;
