import {Dispatch} from "redux";
import {api} from "../api/api";

export type InferActionsType<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
export type ActionsType = InferActionsType<typeof appActions>


export type GenreType = {
    id: number
    name: string
}

export type InitialStateType = {
    genres: Array<GenreType>
}


const initialState = {
   genres:[]
}




export const genresReducer = (state= initialState, action: ActionsType):InitialStateType => {
    switch (action.type) {
        case 'SET_GENRES' :
            return {...state, genres:action.payload}
        default:
            return state
    }
}

export const appActions = {
    setGenres: (payload:Array<GenreType>) => {
        return {
            type: 'SET_GENRES',
            payload
        } as const
    }
}



export const fetchGenresTC = (type:string) => async (dispatch:Dispatch) => {
    try {
        const response = await api.fetchGenres(type)
        dispatch(appActions.setGenres(response.genres))
    }
    catch (e) {
        console.log(e)
    }
}
