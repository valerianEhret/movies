import {Dispatch} from "redux";
import {api, IContent} from "../api/api";

export type InferActionsType<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
export type ActionsType = InferActionsType<typeof appActions>

export type InitialStateType = {
    results: IContent[]
}


const initialState = {
    results: []
}

export const appReducer = (state= initialState, action: ActionsType):InitialStateType => {
    switch (action.type) {
        case 'SET_TRENDING' :
            return {...state, results: action.payload}
        default:
            return state
    }
}

export const appActions = {
    setTrending: (payload:IContent[] ) => {
        return {
            type: 'SET_TRENDING',
            payload
        } as const
    }
}

export const fetchTrendingTC = (currentPage:number) => async (dispatch:Dispatch) => {
    try {
        const response = await api.fetchTrending(currentPage)
        dispatch(appActions.setTrending(response))

    } catch (e) {
        console.log(e)
    }
}