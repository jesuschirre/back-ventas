import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const clients = sequelize.define('clients', {
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    telefono: {
        type: DataTypes.STRING(9),
        allowNull: false,
    },
    }, {
    tableName: 'clientes',
    timestamps: true
});
export default clients;