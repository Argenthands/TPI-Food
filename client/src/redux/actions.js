import axios from "axios"

export const addAllFromApiWeb = (answer)=>{
    return {
        type: "GET_RECIPES_WEB",
        payload: answer
    }
}

export const getllfromDb = (dbAnswer)=>{
    return {
        tyep: "GET_RECIPES_DB",
        payload: dbAnswer
    }
}
/*
export const newRecipe = (recipe)=>{
    return {
        type: "ADD_NEW_RECIPE",
        payload: recipe
    }
}
*/
export function newRecipe(recipe) {
    return async (dispatch) => {
      const recipes_bd = await axios.post(`http://localhost:3001/recipe/add`, {
        title: recipe.title,
        summary: recipe.summary,
        spoonacularScore: recipe.spoonacularScore,
        image: recipe.image,
        healthScore: recipe.healthScore,
      });
      dispatch({
        type: "ADD_NEW_RECIPE",
        payload: recipe
    });
    };
  }