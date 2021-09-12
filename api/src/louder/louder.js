const axios = require('axios');
//const { response } = require('../app');
const { Recipe, Diet, Recipe_Diet } = require('../db');

const {
    URL_ALL,
    API_KEY1,
    API_KEY2,
  } = process.env;

let inputs = 0
const RESULT_NUMBER = '100';
const ADD_INFO = 'true';

const print = ()=>{

    //URL Concatenada
    console.log(`${URL_ALL}?apiKey=${API_KEY1}&number=${RESULT_NUMBER}&addRecipeInformation=${ADD_INFO}`);
    //URL Esperada
    console.log('https://api.spoonacular.com/recipes/complexSearch?apiKey=6559f189ce464b11a06f9cc77af34437&number=100&addRecipeInformation=true')
}

//Funcion para cargar en el Louder
const getAllRecipesFromAPI = async ()=>{
    let record = 0
    try{
        const allRecipes = await axios.get(
            `${URL_ALL}?apiKey=${API_KEY1}&number=${RESULT_NUMBER}&addRecipeInformation=${ADD_INFO}`)
        .then(response => response.data.results)
        .then(results =>{
            results.forEach(async element => {
                let arrayInstructions = element.analyzedInstructions[0]
                let pathToCook = []
                if(arrayInstructions){
                    for( key in (arrayInstructions.steps)){
                        //console.log('Step ---->',arrayInstructions.steps[key].step)
                        pathToCook.push(arrayInstructions.steps[key].step)
                    }
                }

                //Agrego un registro a la tabla de recetas
                await Recipe.create({
                    id: element.id,
                    title: element.title,
                    image: element.image,
                    summary: element.summary,
                    spoonacularScore: element.spoonacularScore,
                    healthScore: element.healthScore,
                    steps: pathToCook
                })
                inputs +=1;

                let arrayDiets = element.diets
                let category = ""
                console.log("New Recipe Created", inputs)
                //Recorro las categorias de dieta que 
                for(let i=0; i < arrayDiets.length; i++){
                    category = arrayDiets[i]
                    //Agrego los registros no repetidos a la tabla de dietas
                    await Diet.findOrCreate({
                        where:{
                            category: category
                        }
                    })
                    //como no pude cargar con el metodo add tengo que traerme el id para cargar manualmente en la tabla intermedia
                    let idTemp = await Diet.findOne({
                        where:{
                            category:arrayDiets[i]
                        }
                    })
                    //la respuesta viene en un formato raro
                    idTemp = await JSON.stringify(idTemp)
                    idTemp = JSON.parse(idTemp)
                    idTemp = idTemp.id
                    //Agrego el registro de la relacion a la tabla intermedia
                    //Diet.addRecipe(newRecipe)
                    await Recipe_Diet.create({
                        recipeId:element.id,
                        dietId:idTemp
                    })
                }
            })
        })
        .catch(error => console.log('error de louder',error))
    }
    catch (error){
        console.error('error en el louder',error)
    }
}


const initializeDietTable = async ()=>{
    const evalueCategories = [
        "vegetarian",
        "vegan",
        "glutenFree",
        "dairyFree",
        "veryHealthy"
    ];
    
    for(let i=0; i<evalueCategories.length;i++){
        try{
            await Diet.findOrCreate({
                where:{
                    category: evalueCategories[i]
                }
            })
        }
        catch(err){
            console.log("Error cargando la tabla Dietas", err)
        }
    }    
}


module.exports = {
    print,
    getAllRecipesFromAPI,
    initializeDietTable
}