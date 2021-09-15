import axios from "axios"

export const addAllFromApiWeb = answer =>{
    return{
        type: "GET_RECIPES_WEB",
        payload: answer
    }
}

export const getAllfromDb = answers =>{
    let arrayRecipes = []
    let recipe ={}
    let diets = []
    for(let i=0; i<answers.length; i++){
        console.log("Respuesta de la base de datos",answers[i])
        recipe.healthScore = answers[i].healthScore
        recipe.id = answers[i].id
        recipe.image = answers[i].image
        recipe.spoonacularScore = answers[i].spoonacularScore
        recipe.steps = answers[i].steps
        recipe.summary = answers[i].summary
        recipe.title = answers[i].title
        diets = answers[i].diets
        for(let j=0; j<diets.length; j++){
            recipe[diets[j].category] = true
        }
        arrayRecipes.push(recipe)
    }
    console.log(arrayRecipes)
    
    return{
        type: "GET_RECIPES_DB",
        payload: arrayRecipes
    }
}

export const changeDietFilter = filters =>{
    return{
        type: "CHANGE_DIET_FILTER",
        payload: filters
    }
}

export const changePage = page =>{
    return{
        type: "CHANGE_PAGE",
        payload: page
    }
}


//Funcion para enviar a la base de datos
export const newRecipe = (recipe)=>{
    return async () => {
        await axios.post(`http://localhost:3001/recipe/add`, {
            title: recipe.title,
            summary: recipe.summary,
            spoonacularScore: recipe.spoonacularScore,
            image: recipe.image,
            healthScore: recipe.healthScore,
            steps: recipe.steps,

            vegetarian:recipe.vegetarian,
            vegan:recipe.vegan,
            glutenFree:recipe.glutenFree,
            dairyFree:recipe.dairyFree,
            veryHealthy:recipe.veryHealthy
        })
    }
}

//funcion para traer un elemento de la api web
const API_KEY1 = "6559f189ce464b11a06f9cc77af34437"
export const searchRecipeFromApiWeb = (id)=>{
    return async ()=>{
        await axios.get(`https://api.spoonacular.com/recipes/${id}/information/?apiKey=${API_KEY1}`)
    }
}
//https://api.spoonacular.com/recipes/1/information/?apiKey=6559f189ce464b11a06f9cc77af34437