import React, {useEffect, useState} from "react"
import {fetchMoviesTC, InitialStateType} from "../../redux/moviesReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import s from "../Trending/Trending.module.css";
import {SingleContent} from "../../components/SingleContent/SingleContent";
import {Pagination} from "../../components/Pagination/Pagination";
import {Genres} from "../../components/Genres/Genres";


export const Movies = () => {

    const dispatch = useDispatch()
    const {results, page, total_pages} = useSelector<AppRootStateType, InitialStateType>(state=>state.movies)

    const changeCurrentPage = (newPageNumber:number) => {
        dispatch(fetchMoviesTC(newPageNumber))
    }

   const [genres, setGenres] = useState([])


    useEffect(()=>{
        dispatch(fetchMoviesTC(page))
    },[])

    return (
        <div className={s.trending_block}>
            <span className={'pageTitle'}>Movies</span>
            <Genres type={'movie'} genres={genres} setGenres={setGenres}/>
            <div className={s.trending}>
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
