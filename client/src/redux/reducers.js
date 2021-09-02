const initialState = {
	//Lista de recetas
	recipes: [],
	//Formato de Receta
	recipe: {
		id: 0,
		title: '',
		image: '',
		summary: '',
		spoonacularScore: 0,
		healthScore: 0,
		//lista de pasos para cocinar
		steps: []
	},
	//texto descriptivo de 1 paso
	step: '',
	//lista dieta
	diets: [],
	//1 dieta
	diet: '',

	//paginado
	currentPage: 1,
	itemsPerPage: 9,
};

function rootReducer(state = initialState, action) {
	switch (action.type) {
		case "GET_RECIPES": {
			return {
				...state,
				recipes: action.payload
			}
		}//case end
		default: {
			return state;
		}
	}
}

export default rootReducer;