import React from "react"
import {GenreType} from "../components/Genres/Genres"


export const useGenres = (selectedGenres: Array<GenreType>) => {
    if (selectedGenres.length < 1) return "";

    const GenreIds = selectedGenres.map((g) => g.id.toString());
    return GenreIds.reduce((acc, value) => {
        return acc + ',' + value
    })
}