import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from "./reducers";

const reducers = combineReducers({
    reducer,
})

export const store = createStore(reducers,composeWithDevTools(applyMiddleware(thunk)));
