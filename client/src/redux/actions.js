import axios from "axios"

export const addAllFromApiWeb = (answer)=>{
    return {
        type: "GET_RECIPES_WEB",
        payload: answer
    }
}

export const getAllfromDb = (answer)=>{
    return {
        tyep: "GET_RECIPES_DB",
        payload: answer
    }
}

//Funcion para enviar a la base de datos
export const newRecipe = (recipe)=>{
    return async () => {
        let recipesDB = await axios.post(`http://localhost:3001/recipe/add`, {
            title: recipe.title,
            summary: recipe.summary,
            spoonacularScore: recipe.spoonacularScore,
            image: recipe.image,
            healthScore: recipe.healthScore,
        })
        console.log(recipesDB)
    }
}