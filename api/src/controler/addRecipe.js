//const axios = require('axios');
const { Recipe, Diet, Recipe_Diet } = require('../db');

// se resetea la PK y no se por que
const addRecipe = async function (
    title,
    image,
    summary,
    spoonacularScore,
    healthScore,
    steps,

    vegetarian,
    vegan,
    glutenFree,
    dairyFree,
    veryHealthy,
){

    const makeRelation = async function(dietCategory){
        //busco la clave
        let idTemp = await Diet.findOne({
            where:{
                category: dietCategory
            }
        })
    //la respuesta viene en un formato raro
        idTemp = await JSON.stringify(idTemp)
        idTemp = JSON.parse(idTemp)
        idTemp = idTemp.id
    //agrego la relacion
        await Recipe_Diet.create({
            recipeId:newId,
            dietId: Diet.category = idTemp
        })
    }
    
    //voy a tener que consultar cual es la clave que sigue
    let newId = 1165540
    let maxId = await Recipe.max('id');
    //console.log("la id Maxima es --> ",maxId," es de tipo ", typeof(maxId))
    if(maxId >= 1165540){
        newId = maxId +1
    }

    try{
        const newRecipe = await Recipe.create({
            id: newId,
            title: title,
            image: image,
            summary: summary,
            spoonacularScore: spoonacularScore,
            healthScore: healthScore,
            steps
        })

    //Pregunto y cargo las relaciones
        if(vegetarian){
            console.log("vegetarian =",vegetarian)
            makeRelation("vegetarian")
        }
        if(vegan){
            console.log("vegan =",vegan)
            makeRelation("vegan")
        }
        if(glutenFree){
            console.log("glutenFree =",glutenFree)
            makeRelation("glutenFree")
        }
        if(dairyFree){
            console.log("dairyFree =",dairyFree)
            makeRelation("dairyFree")
        }
        if(veryHealthy){
            console.log("veryHealthy =",veryHealthy)
            makeRelation("veryHealthy")
        }
/*
        await Recipe_Diet.create({
            recipeId:newId,
            dietId: Diet.category = idTemp
        })
*/
        return newRecipe
    }
    catch(error){
        console.log("Error en la carga de Recipe",error)
        return("Error en la carga de Recipe", error)
    }

}

module.exports = {
    addRecipe
}