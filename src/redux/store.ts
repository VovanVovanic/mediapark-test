import { applyMiddleware, combineReducers, createStore } from "redux";

import thunk from "redux-thunk";
import { authReducer } from "./reducers/auth";
import { todosReducer } from "./reducers/todos";


const reducers = combineReducers({
  auth: authReducer,
  todos: todosReducer
});

type rootReducerType = typeof reducers;
export type RootStateType = ReturnType<rootReducerType>;

// @ts-ignore
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, applyMiddleware(thunk));
export default store;