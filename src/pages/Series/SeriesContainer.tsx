import {VideoContent} from "../../components/VideoContent/VideoContent"
import {Genres} from "../../components/Genres/Genres"
import {useDispatch, useSelector} from "react-redux"
import {AppRootStateType} from "../../redux/store"
import {fetchVideoContentTC, InitialStateType} from "../../redux/moviesReducer"
import {useGenres} from "../../hooks/useGenres"
import s from "../../components/VideoContent/VideoContent.module.css"
import {Pagination} from "../../components/Pagination/Pagination"
import {useEffect, useState} from "react";

export const SeriesContainer = () => {

    const type = 'tv'

    const dispatch = useDispatch()
    const {results, page, total_pages} = useSelector<AppRootStateType, InitialStateType>(state=>state.movies)

    const changeCurrentPage = (newPageNumber:number) => {
        dispatch(fetchVideoContentTC(newPageNumber, genreForURL, type))
    }


    const [selectedGenres, setSelectedGenres] = useState([])

    const genreForURL = useGenres(selectedGenres)

    useEffect(()=>{
        dispatch(fetchVideoContentTC(page, genreForURL, type))
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