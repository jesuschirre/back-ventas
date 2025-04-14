import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const Categoria = db.define('Categoria', {
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
    }
}, {
    tableName: 'categorias',
    timestamps: true,
});

export default Categoria;
