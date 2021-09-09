const initialState = {
	//Lista de recetas
	recipesWeb: [],
	recipesDb: [],
	//Filtros
	dietFilters: [],
	recipeDiets:[],
	//Paginado
	currentPage:1,
  	itemsPerPage:9,
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

		case "ADD_DIET_FILTER":{
			return{
				...state,
				dietFilters: state.dietFilters.includes(action.payload)?
				state.dietFilters:state.dietFilters.concat(action.payload)
			}
		}

		case "REMOVE_DIET_FILTER":{
			return{
				...state,
				dietFilters: state.dietFilters.filter(df => df !== action.payload)
			}
		}
		
		default:{
			return state;
		}
	}
}

export default rootReducer;

