const initialState = {
	//Lista de recetas
	recipesWeb: [],
	recipesDb: [],
	//Filtros
	dietFilters: {
        vegetarian: false,
        vegan: false,
        glutenFree: false,
        dairyFree: false,
        veryHealthy: false,
        cheap: false,
        sustainable: false,
    },
	recipeDiets:[],
	//Paginado
	currentPage:1,
  	itemsPerPages:9,
};

function rootReducer(state = initialState, action) {
	switch (action.type) {

		case "GET_RECIPES_WEB":{
			return{
				...state,
				recipesWeb: action.payload
			}
		}

		case "GET_RECIPES_DB":{
			return{
				...state,
				recipesDb: action.payload
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
		
		default:{
			return state;
		}
	}
}

export default rootReducer;

