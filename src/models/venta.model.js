import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Venta = db.define("Venta", {
  clienteId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  total: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
}, {
  tableName: "ventas",
  timestamps: true,
});

export default Venta;
