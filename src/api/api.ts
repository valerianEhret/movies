import {instance} from "./axios"
import {GenreType} from "../components/Genres/Genres"


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

type GenresType = {
    genres: Array<GenreType>
}

type BelongsToCollectionType = {
    backdrop_path: string
    id: number
    name: string
    poster_path: string
}

type ProductionCompanyType = {
    id: number
    logo_path: string
    name: string
    origin_country: string
}

type ProductionCountryType = {
    iso_3166_1: string
    name: string
}
type SpokenLanguageType = {
    english_name: string
    iso_639_1: string
    name: string
}

export type DataType = {
    adult: boolean
    backdrop_path: string
    belongs_to_collection: BelongsToCollectionType | null
    budget: number
    genres: Array<GenreType>
    homepage: string
    id: number
    imdb_id: string
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    production_companies: Array<ProductionCompanyType>
    production_countries: Array<ProductionCountryType>
    release_date?: string | null
    firs_air_date?: string | null
    revenue: number
    runtime: number
    spoken_languages: Array<SpokenLanguageType>
    status: string
    tagline: string
    title?: string | null
    name?:string | null
    video: boolean
    vote_average: number
    vote_count: number
}

export const api = {
    fetchTrending: async (currentPage: number) => {
        const response = await instance.get<ResponseType>(`trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${currentPage}`)
        return response.data
    },
    fetchVideoContent: async (currentPage: number, genreForURL:string, type:string) => {
        const response = await instance.get<ResponseType>(`discover/${type}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${currentPage}&with_watch_monetization_types=flatrate&with_genres=${genreForURL}`)
        return response.data
    },
    fetchGenres: async (type:string) => {
        const response = await instance.get<GenresType>(`genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
        return response.data
    },
    fetchSearch: async (type: string, searchText:string, page:number) => {
        const response = await instance.get<ResponseType>(`search/${type}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchText}&page=${page}&include_adult=false`)
        return response.data
    },
    fetchData: async (type:string, id: number) => {
        const response = await instance.get<DataType>(`${type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
        return response.data
    },
    fetchVideo: async (type:string, id: number) => {
        const response = await instance.get(`${type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
        return response.data
    }
}