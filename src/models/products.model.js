import { DataTypes } from 'sequelize';
import db from '../config/db.js';
import Categoria from './categorias.model.js';

const Product = db.define('Product', {
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    precio: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    categoriaId: { 
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'productos',
    timestamps: true,
});

Product.belongsTo(Categoria, {
    foreignKey: 'categoriaId',
    as: 'categoria', 
});

export default Product;
