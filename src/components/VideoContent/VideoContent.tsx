import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {fetchMoviesTC, InitialStateType} from "../../redux/moviesReducer";
import {useGenres} from "../../hooks/useGenres";
import s from "./VideoContent.module.css";
import {Genres} from "../Genres/Genres";
import {SingleContent} from "../SingleContent/SingleContent";
import {Pagination} from "../Pagination/Pagination";

type VideoContentPropsType = {
    type: string
    title: string
}

export const VideoContent: React.FC<VideoContentPropsType> = ({type, title}) => {

    const dispatch = useDispatch()
    const {results, page, total_pages} = useSelector<AppRootStateType, InitialStateType>(state=>state.movies)

    const changeCurrentPage = (newPageNumber:number) => {
        dispatch(fetchMoviesTC(newPageNumber, genreForURL, type))
    }

    const [genres, setGenres] = useState([])
    const [selectedGenres, setSelectedGenres] = useState([])

    const genreForURL = useGenres(selectedGenres)

    useEffect(()=>{
        dispatch(fetchMoviesTC(page, genreForURL, type))
    },[genreForURL])



    return(
        <div className={s.video_content_block}>
            <span className={s.page_title}>{title}</span>
            <Genres
                type={type}
                genres={genres}
                setGenres={setGenres}
                selectedGenres={selectedGenres}
                setSelectedGenres={setSelectedGenres}
                genreForURL={genreForURL}
            />
            <div className={s.video_content}>
                {results.map((c)=>
                    <SingleContent
                        key={c.id}
                        poster={c.poster_path}
                        id = {c.id}
                        title = {c.title || c.name}
                        date={c.release_date || c.first_air_date}
                        media_type={'movie'}
                        vote_average={c.vote_average}
                    />)}
            </div>
            <div className={s.pagination}>
                <Pagination onPageChange = {changeCurrentPage} currentPage={page} portionSize={5} pagesCount={total_pages}/>
            </div>
        </div>
    )
}