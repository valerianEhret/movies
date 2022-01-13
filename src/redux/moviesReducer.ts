import {Dispatch} from "redux";
import {api, IContent} from "../api/api";

export type InferActionsType<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
export type ActionsType = InferActionsType<typeof appActions>

export type InitialStateType = {
    results: IContent[]
    total_pages: number
    total_results: number
    page: number
}


const initialState = {
    results: [],
    total_pages:500,
    total_results:10000,
    page:1
}

export const moviesReducer = (state= initialState, action: ActionsType):InitialStateType => {
    switch (action.type) {
        case 'SET_MOVIES' :
            return {...state, results: action.payload.results, page:action.payload.page, total_pages:action.payload.total_pages, total_results: action.payload.total_results}
        default:
            return state
    }
}

export const appActions = {
    setMovies: (payload:InitialStateType ) => {
        return {
            type: 'SET_MOVIES',
            payload
        } as const
    }
}

export const fetchMoviesTC = (currentPage:number) => async (dispatch:Dispatch) => {
    try {
        const response = await api.fetchMovies(currentPage)
        dispatch(appActions.setMovies(response))

    } catch (e) {
        console.log(e)
    }
}