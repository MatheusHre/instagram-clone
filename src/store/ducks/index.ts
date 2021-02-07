import { combineReducers } from "redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducerPosts from "./posts";

import reducerStorie from "./stories";

import reducerUsuario from "./usuario";


const createRootReducer = () => combineReducers({
    usuario: reducerUsuario,
    storie: reducerStorie,
    post: reducerPosts
})

const store = createStore(createRootReducer(), composeWithDevTools())

export { store }