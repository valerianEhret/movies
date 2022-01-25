import {applyMiddleware, combineReducers, createStore} from "redux"
import thunkMiddleware from 'redux-thunk'
import {moviesReducer} from "./moviesReducer";
import {genresReducer} from "./genresReducer";
import {contentReducer} from "./contentReducer";


const rootReducer = combineReducers({
    movies: moviesReducer,
    genres:genresReducer,
    content: contentReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store // for dev