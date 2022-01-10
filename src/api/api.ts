import {instance} from "./axios";


export type IContent = {
    adult: boolean
    backdrop_path: string
    genre_ids: Array<number>
    id: number
    original_language: string
    original_title: string
    overview: string
    poster_path: string
    release_date?: string
    first_air_date?:string
    title?: string
    name?:string
    video: boolean
    vote_average: number
    vote_count: number
    popularity: number
    media_type: string
}

export type ResponseType = {
    page: number
    results: IContent[]
    total_pages: number
    total_results: number
}

export const api = {
    fetchTrending: async (currentPage:number) => {
        const response = await instance.get<ResponseType>(`3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${currentPage}`)
        return response.data.results
    }
}