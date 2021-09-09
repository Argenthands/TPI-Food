const initialState = {
	//Lista de recetas
	recipesWeb: [],
	recipesDb: [],
	//Formato de Receta
	recipe: {
		id: 0,
		title: "",
		image: "",
		summary: "",
		spoonacularScore: 0,
		healthScore: 0,
		//lista de pasos para cocinar
		steps: []
	},
};

function rootReducer(state = initialState, action) {
	switch (action.type) {

		case "GET_RECIPES_WEB":{
			return {
				...state,
				recipesWeb: action.payload
			}
		}

		case "GET_RECIPES_DB":{
			return {
				...state,
				recipesDb: action.payload
			}
		}
		
		default:{
			return state;
		}
	}
}

export default rootReducer;

