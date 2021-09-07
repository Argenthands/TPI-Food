//const axios = require('axios');
const { Recipe } = require('../db');

// se resetea la PK y no se por que
const addRecipe = async function (
    title,
    image,
    summary,
    spoonacularScore,
    healthScore,
    steps
){

    //voy a tener que consultar cual es la clave que sigue
    let newId = 1165540
    let maxId = await Recipe.max('id');
    //console.log("la id Maxima es --> ",maxId," es de tipo ", typeof(maxId))
    if(maxId < 1165540){
        newId = 1165540
    }else{
        newId = maxId +1;
    }

    const creaated = await Recipe.create({
        id: newId,
        title: title,
        image: image,
        summary: summary,
        spoonacularScore: spoonacularScore,
        healthScore: healthScore,
        steps
        
    }).catch(error =>{
        console.log(error);
    })
    return creaated
}

module.exports = {
    addRecipe
}