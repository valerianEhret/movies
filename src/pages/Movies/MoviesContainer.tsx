import React, {useEffect, useState} from "react"
import {VideoContent} from "../../components/VideoContent/VideoContent"
import {Genres} from "../../components/Genres/Genres"
import {useDispatch, useSelector} from "react-redux"
import {AppRootStateType} from "../../redux/store"
import {fetchMoviesTC, InitialStateType} from "../../redux/moviesReducer"
import {useGenres} from "../../hooks/useGenres"
import s from "../../components/VideoContent/VideoContent.module.css"
import {Pagination} from "../../components/Pagination/Pagination"

export const MoviesContainer = () => {

    const type = 'movie'

    const dispatch = useDispatch()
    const {results, page, total_pages} = useSelector<AppRootStateType, InitialStateType>(state=>state.movies)

    const changeCurrentPage = (newPageNumber:number) => {
        dispatch(fetchMoviesTC(newPageNumber, genreForURL, type))
    }


    const [selectedGenres, setSelectedGenres] = useState([])

    const genreForURL = useGenres(selectedGenres)

    useEffect(()=>{
        dispatch(fetchMoviesTC(page, genreForURL, type))
    },[genreForURL])



    return (
        <div className={s.video_content_block}>
            <Genres
                type={type}
                selectedGenres={selectedGenres}
                setSelectedGenres={setSelectedGenres}
                genreForURL={genreForURL}
            />
            <VideoContent results={results}/>
            <Pagination
                onPageChange = {changeCurrentPage}
                currentPage={page} portionSize={5}
                pagesCount={total_pages}/>
        </div>
    )
}