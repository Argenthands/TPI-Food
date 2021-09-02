export  function getRecipes(data) {
    return {
        type: 'GET_RECIPES',
        payload: data
    }
}