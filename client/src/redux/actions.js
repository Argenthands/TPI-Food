import axios from "axios"

export const addAllFromApiWeb = answer =>{
    return{
        type: "GET_RECIPES_WEB",
        payload: answer
    }
}

export const getAllfromDb = answer =>{
    return{
        type: "GET_RECIPES_DB",
        payload: answer
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

            vegetarian:recipe.vegetarian,
            vegan:recipe.vegan,
            glutenFree:recipe.glutenFree,
            dairyFree:recipe.dairyFree,
            veryHealthy:recipe.veryHealthy
        })
    }
}