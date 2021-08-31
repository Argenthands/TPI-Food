const express = require('express');
const { Op } = require("sequelize");
const { Recipe, Diet } = require('../db');

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

//query
router.get('/', async function (req, res){
    //?name=algo
    const { name } = req.query;
    try{
        await Recipe.findAll({
            where:{
                title:{
                    [Op.iLike]:"%"+name+"%"
                }
            },
            include: [Diet]
        })
        .then(answer =>{
            return res.json(answer)
        })
    }
    catch(error){
        error =>{ 
            console.log('error en query Recipes',error)
            return res.json('error en query Recipes',error)
        }
    }  
})

//params
router.get('/id/:id', async function (req, res){
    const { id } = req.params;
    try{
        await Recipe.findAll({
            where:{
                id:id
            },
            include: [Diet]
        })
        .then(answer =>{
            return res.json(answer)
        })
    }
    catch(error){
        error =>{ 
            console.log('error en id Recipes',error)
            return res.json('error en id Recipes',error)
        }
    }  
})

//body
router.post('/',async function (req, res){
    const {
        title,
        image,
        summary,
        spoonacularScore,
        healthScore,
        steps
    } = req.body;
    if(title, summary){
        try{
            await Recipe.create({
                id: 'id',
                title: title,
                image: image,
                summary: summary,
                spoonacularScore: spoonacularScore,
                healthScore: healthScore,
                steps: steps
            })
        }
        catch(error){
            error =>{ 
                console.log('error en Post Recipes',error)
                return res.json('error en Post Recipes',error)
            }
        }  
    }
})


module.exports = router;