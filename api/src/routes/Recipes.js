const express = require('express');
const { Recipe } = require('../db');

const router = express.Router();


/*
[ ] GET /recipes?name="...":
Obtener un listado de las recetas que contengan la palabra ingresada como query parameter
Si no existe ninguna receta mostrar un mensaje adecuado
[ ] GET /recipes/{idReceta}:
Obtener el detalle de una receta en particular
Debe traer solo los datos pedidos en la ruta de detalle de receta
Incluir los tipos de dieta asociados
[ ] GET /types:
Obtener todos los tipos de dieta posibles
En una primera instancia, cuando no exista ninguno, deberán precargar la base de datos con los tipos de datos indicados por spoonacular acá
[ ] POST /recipe:
Recibe los datos recolectados desde el formulario controlado de la ruta de creación de recetas por body
Crea una receta en la base de datos
*/

router.get('/', async function (req, res){
    return res.send('recipes')
})

router.get('/title', async function (req, res){
    //const { title } = req.params;
    //const { title } = req.query; //?
    //const { title } = req.body; //json
    title = "Cauliflower, Brown Rice, and Vegetable Fried Rice"
    try{
        await Recipe.findOne({
            where:{
                title:title
            }
        })
        .then(recipe =>{
            return res.json(recipe)
        })
    }
    catch(error){
        error =>{
            console.log(error)
            return res.json(error)
        }
    }
})

module.exports = router;