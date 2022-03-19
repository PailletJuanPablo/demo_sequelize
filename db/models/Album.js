// sequelize.define() Método para definir un modelo nuevo
const sequelize = require('sequelize');




module.exports = (sequelize, DataTypes) => {
    const alias = 'Album';


    const configuracion = {
        timestamps: false,
        tableName: 'albumes'
    }

    const columnas = {
        // columnas en mi base de datos
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        titulo: DataTypes.STRING,
        id_artista: DataTypes.INTEGER
    }

    const Album = sequelize.define(alias, columnas, configuracion);
    return Album
};
