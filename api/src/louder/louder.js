const axios = require('axios');
const { response } = require('../app');
const { Recipe, Diet, Recipe_Diet } = require('../db');

const {
    URL_ALL,
    API_KEY1,
    API_KEY2,
  } = process.env;


const RESULT_NUMBER = '3';
const ADD_INFO = 'true';

const print = ()=>{

    //URL Concatenada
    console.log(`${URL_ALL}?apiKey=${API_KEY1}&number=${RESULT_NUMBER}&addRecipeInformation=${ADD_INFO}`);
    //URL Esperada
    console.log('https://api.spoonacular.com/recipes/complexSearch?apiKey=6559f189ce464b11a06f9cc77af34437&number=100&addRecipeInformation=true')
}

//Funcion para cargar en el Louder
const getAllRecipesFromAPI = async ()=>{
    try{

        const allRecipes = await axios.get(`${URL_ALL}?apiKey=${API_KEY1}&number=${RESULT_NUMBER}&addRecipeInformation=${ADD_INFO}`)
        .then(response => response.data.results)
        .then(results =>{
            results.forEach(async element => {
                let arrayInstructions = element.analyzedInstructions

                
                console.log('el tipo de dato es',typeof(arrayInstructions), arrayInstructions)
    
                await Recipe.create({
                    id: element.id,
                    title: element.title,
                    image: element.image,
                    //summary: element.summary,
                    spoonacularScore: element.spoonacularScore,
                    healthScore: element.healthScore,
                    //steps: arraySteps
                })
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