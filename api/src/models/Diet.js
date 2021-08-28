const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('diet', {
    id: { //propiedad de primer orden
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    category: { //propiedad de primer orden
      type: DataTypes.STRING,
      allowNull: false,
    }
  },{
    timestamps: false
  });
};

/*
[ ] Tipo de dieta con las siguientes propiedades:
ID
Nombre
*/