import { combineReducers, createStore } from "redux";
import { todoReducer } from "../redux/todoReducer";

const rootReducers = combineReducers({
  todoReducer
});

export const store = createStore(rootReducers)