import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = combineReducers({
    reducer
})

const store = createStore(reducers,composeWithDevTools(applyMiddleware(thunk)));

export default store;