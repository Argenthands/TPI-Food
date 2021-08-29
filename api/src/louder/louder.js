const axios = require('axios');
const { response } = require('../app');
const { Recipe, Diet, Recipe_Diet } = require('../db');

const {
    URL_ALL,
    API_KEY1,
    API_KEY2,
  } = process.env;


const RESULT_NUMBER = '2';
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
        const allRecipes = await axios.get(`${URL_ALL}?apiKey=${API_KEY1}&number=${RESULT_NUMBER}&addRecipeInformation=${ADD_INFO}`)
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
                let newRecipe = await Recipe.create({
                    id: element.id,
                    title: element.title,
                    image: element.image,
                    summary: element.summary,
                    spoonacularScore: element.spoonacularScore,
                    healthScore: element.healthScore,
                    steps: pathToCook
                })

                let arrayDiets = element.diets
                //Recorro las categorias de dieta que 
                for(let i=0; i < arrayDiets.length; i++){
                    //Agrego los registros no repetidos a la tabla de dietas
                    let newDiet = await Diet.findOrCreate({
                        where:{
                            category: arrayDiets[i]
                        }
                    })
                    //Agrego el registro de la relacion a la tabla intermedia
                    //newDiet.addRecipe([newRecipe])
                }
            })
        })
        .catch(error => console.log('ERROR',error))
    }
    catch (error){
        console.error('error',error)
    }
}


module.exports = {
    print,
    getAllRecipesFromAPI
}