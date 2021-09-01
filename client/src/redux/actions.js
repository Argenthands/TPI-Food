export function getAllRecipesFromApiWeb(){
    return async (dispatch)=>{
        try{
            dispatch({
                type: RECIPE_LOADING_FROM_API_WEB,
                payload: 'payload'
            })
        }
        catch (err){
            console.log("|---> getAllRecipesFromApiWeb <---|")
            console.log(err)
        }
    }
}

//export g