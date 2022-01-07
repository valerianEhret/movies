import axios from "axios";


export const baseURL =  'https://api.themoviedb.org/'


export const instance = axios.create({
    baseURL: baseURL
})