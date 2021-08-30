const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id: { //propiedad de primer orden
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: { //propiedad de primer orden
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    summary: { // propiedad de primer orden
      type: DataTypes.STRING(2000), //tengo problemas con la extencion del texto
      allowNull: true // debe ser false
    },
    spoonacularScore: { // propiedad de primer orden
      type: DataTypes.FLOAT,
      allowNull: true
    },
    healthScore: { // propiedad de primer orden
      type: DataTypes.FLOAT,
      allowNull: true
    },
    steps: { //propiedad de primer orden
      type: DataTypes.ARRAY(DataTypes.STRING(2000)),
      allowNull: true
    }
  },{
    timestamps: false
  });
};

/*
[ ] Receta con las siguientes propiedades:
ID: *
Nombre *
Resumen del plato *
Puntuación
Nivel de "comida saludable"
Paso a paso
*/