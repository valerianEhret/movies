import {instance} from "./axios";


export const api = {
    fetchTrending: async () => {
        const response = await instance.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`)
        return response.data
    }
}