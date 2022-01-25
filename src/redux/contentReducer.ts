import {Dispatch} from "redux";
import {api, DataType} from "../api/api";
import {GenreType} from "../components/Genres/Genres";

export type InferActionsType<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
export type ActionsType = InferActionsType<typeof appActions>


const initialState: DataType = {
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
}




export const contentReducer = (state= initialState, action: ActionsType):DataType => {
    switch (action.type) {
        case 'SET_DATA' :
            return {...state, ...action.payload}
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
    }
}



export const fetchDataTC = (type:string, id: number) => async (dispatch:Dispatch) => {
    try {
        const response = await api.fetchData(type, id)
        dispatch(appActions.setData(response))
    }
    catch (e) {
        console.log(e)
    }
}
