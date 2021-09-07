const initialState = {
	//Lista de recetas
	recipes: [],
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
		case "GET_RECIPES": {
			return {
				...state,
				recipes: action.payload
			}
		}
		default: {
			return state;
		}
	}
}

export default rootReducer;

