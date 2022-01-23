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
        case 'SET_VIDEO_CONTENT' :
            return {...state, results: action.payload.results, page:action.payload.page, total_pages:action.payload.total_pages, total_results: action.payload.total_results}
        default:
            return state
    }
}

export const appActions = {
    setVideoContent: (payload:InitialStateType ) => {
        return {
            type: 'SET_VIDEO_CONTENT',
            payload
        } as const
    }
}

export const fetchVideoContentTC = (currentPage:number, genreForURL:string, type:string) => async (dispatch:Dispatch) => {
    try {
        const response = await api.fetchVideoContent(currentPage, genreForURL, type )
        dispatch(appActions.setVideoContent(response))

    } catch (e) {
        console.log(e)
    }
}

export const fetchTrendingTC = (currentPage:number) => async (dispatch:Dispatch) => {
    try {
        const response = await api.fetchTrending(currentPage)
        dispatch(appActions.setVideoContent(response))

    } catch (e) {
        console.log(e)
    }
}

export const fetchSearchTC = (type: string, searchText:string, page:number ) => async (dispatch:Dispatch) => {
    try {
        const response = await api.fetchSearch(type, searchText, page)
        dispatch(appActions.setVideoContent(response))

    } catch (e) {
        console.log(e)
    }
}


