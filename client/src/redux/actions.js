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

export const addDietFilter = addFilter =>{
    return{
        type: "ADD_DIET_FILTER",
        payload: addFilter
    }
}

export const removeDietFilter = outFilter =>{
    return{
        type: "REMOVE_DIET_FILTER",
        payload: outFilter
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
        })
    }
}