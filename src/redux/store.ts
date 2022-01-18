import {applyMiddleware, combineReducers, createStore} from "redux"
import thunkMiddleware from 'redux-thunk'
import {trendingReducer} from "./trendingReducer";
import {moviesReducer} from "./moviesReducer";
import {genresReducer} from "./genresReducer";


const rootReducer = combineReducers({
    trending: trendingReducer,
    movies: moviesReducer,
    genres:genresReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store // for dev