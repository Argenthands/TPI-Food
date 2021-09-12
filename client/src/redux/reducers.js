const initialState = {
	//Lista de recetas
	recipesWeb: [],
	recipesDb: [],
	allRecipes: [],
	//Filtros
	dietFilters: {
        vegetarian: false,
        vegan: false,
        glutenFree: false,
        dairyFree: false,
        veryHealthy: false,
    },
	recipeDiets:[],
	emptyRecipe:[
		{
			title:"There is no result for your search",
			summary: "There is no result for your search"
		},
		{
			title:"There is no result for your search",
			summary: "There is no result for your search"
		},
		{
			title:"There is no result for your search",
			summary: "There is no result for your search"
		},
		{
			title:"There is no result for your search",
			summary: "There is no result for your search"
		},
		{
			title:"There is no result for your search",
			summary: "There is no result for your search"
		},
		{
			title:"There is no result for your search",
			summary: "There is no result for your search"
		},
		{
			title:"There is no result for your search",
			summary: "There is no result for your search"
		},
		{
			title:"There is no result for your search",
			summary: "There is no result for your search"
		},
		{
			title:"There is no result for your search",
			summary: "There is no result for your search"
		},
		{
			title:"There is no result for your search",
			summary: "There is no result for your search"
		},
		{
			title:"There is no result for your search",
			summary: "There is no result for your search"
		},
		{
			title:"There is no result for your search",
			summary: "There is no result for your search"
		},
	],
	//Paginado
	currentPage:0,
  	itemsPerPages:9,
};

function rootReducer(state = initialState, action) {
	switch (action.type) {

		case "GET_RECIPES_WEB":{
			return{
				...state,
				recipesWeb: action.payload,
				allRecipes: action.payload
			}
		}

		case "GET_RECIPES_DB":{
			return{
				...state,
				allRecipes: state.recipesWeb.concat(action.payload),
				recipesDb: action.payload,
			}
		}

		case "CHANGE_DIET_FILTER":{
			return{
				...state,
				dietFilters: action.payload
			}
		}

		case "CHANGE_PAGE":{
			return{
				...state,
				currentPage: action.payload
			}
		}

		case "APPLY_FILTER":{
			return{
				...state,
				allRecipes: state.allRecipes.filter(recipe => recipe.vegetarian === state.dietFilters.vegetarian)
			}
		}
		
		default:{
			return state;
		}
	}
}

export default rootReducer;

