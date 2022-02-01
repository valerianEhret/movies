import {Dispatch} from "redux";
import {api, DataType} from "../api/api";


export type InferActionsType<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
export type ActionsType = InferActionsType<typeof appActions>


export type InitialStateType = {
    data: DataType,
    video:string
}

const initialState:InitialStateType  = {
    data: {
        adult: false,
        backdrop_path: '',
        belongs_to_collection: null,
        budget: 0,
        genres: [],
        homepage: '',
        id: 0,
        imdb_id: '',
        original_language: 'en',
        original_title: '',
        overview: '',
        popularity: 1,
        poster_path: '',
        production_companies: [],
        production_countries: [],
        release_date: null,
        revenue: 0,
        runtime: 0,
        spoken_languages: [],
        status: '',
        tagline: '',
        title: null,
        name:null,
        firs_air_date:null,
        video: false,
        vote_average: 0,
        vote_count: 0
    },
    video: ''
}




export const contentReducer = (state= initialState, action: ActionsType):InitialStateType => {
    switch (action.type) {
        case 'SET_DATA' :
            return {...state, data:action.payload}
        case 'SET_VIDEO' :
            return {...state, video:action.payload}
        default:
            return state
    }
}

export const appActions = {
    setData: (payload:DataType) => {
        return {
            type: 'SET_DATA',
            payload
        } as const
    },
    setVideo: (payload:string) => {
        return {
            type: 'SET_VIDEO',
            payload
        } as const
    }
}



export const fetchDataTC = (type:string, id: number) => async (dispatch:Dispatch) => {
    try {
        const response1 = await api.fetchData(type, id)
        dispatch(appActions.setData(response1))
        const response2 = await api.fetchVideo(type, id)
        dispatch(appActions.setVideo(response2.results[0]?.key))

    }
    catch (e) {
        console.log(e)
    }
}

export const fetchVideoTrailer = (type:string, id:number) => async (dispatch:Dispatch) => {
    try {
        const response = await api.fetchVideo(type, id)
    } catch (e) {
        console.log(e)
    }
}