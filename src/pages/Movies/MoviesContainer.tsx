import React, {useEffect, useState} from "react"
import {VideoContent} from "../../components/VideoContent/VideoContent"
import {Genres} from "../../components/Genres/Genres"
import {useDispatch, useSelector} from "react-redux"
import {AppRootStateType} from "../../redux/store"
import {fetchVideoContentTC, InitialStateType} from "../../redux/moviesReducer"
import {useGenres} from "../../hooks/useGenres"
import s from "../../components/VideoContent/VideoContent.module.css"
import {Pagination} from "../../components/Pagination/Pagination"
import {ContentModal} from "../../components/ContentModal/ContentModal";
import {ContentDescription} from "../../components/ContentDescription/ContentDescription";
import {fetchDataTC} from "../../redux/contentReducer";
import {DataType} from "../../api/api";
import {img_500, unavailable, unavailableLandscape} from "../../config/config";

export const MoviesContainer = () => {

    const type = 'movie'

    const dispatch = useDispatch()
    const {results, page, total_pages} = useSelector<AppRootStateType, InitialStateType>(state=>state.movies)

    const changeCurrentPage = (newPageNumber:number) => {
        dispatch(fetchVideoContentTC(newPageNumber, genreForURL, type))
    }

    const [modalActive, setModalActive] = useState<boolean>(false);

    const activateModal = (id:number) => {
        setModalActive(true)
        dispatch(fetchDataTC(type, id))
    }

    const {poster_path, backdrop_path, title, name, release_date, firs_air_date, tagline, overview} = useSelector<AppRootStateType, DataType>(state=> state.content)


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
            <VideoContent results={results} setModal={activateModal}/>
            <ContentModal active={modalActive} setActive={setModalActive}>
                <div>
                    <img className={s.content_portrait} src={poster_path?`${img_500}/${poster_path}`: unavailable} alt="poster"/>
                    <img  className={s.content_modal_landscape} src={backdrop_path?`${img_500}/${backdrop_path}`: unavailableLandscape} alt="poster"/>
                    <span className={s.content_modal_title}>
                        {name || title}
                    </span>
                    <i> {tagline}</i>

                </div>
                <div className={s.content_modal_about}>
                    <span className={s.content_modal_title}>
                        {name || title}
                        {firs_air_date || release_date}
                    </span>
                    <i> {tagline}</i>
                    {overview}
                </div>

                {/*<ContentDescription/>*/}
            </ContentModal>
            <Pagination
                onPageChange = {changeCurrentPage}
                currentPage={page}
                portionSize={5}
                pagesCount={total_pages}/>
        </div>
    )
}