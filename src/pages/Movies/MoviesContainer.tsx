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
import {fetchDataTC, fetchVideoTrailer} from "../../redux/contentReducer";
import {DataType} from "../../api/api";


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
        // dispatch(fetchVideoTrailer(type, id))
        console.log(video)
    }

    const {poster_path, backdrop_path, title, name, release_date, firs_air_date, tagline, overview} =
        useSelector<AppRootStateType, DataType>(state=> state.content.data)
    const video = useSelector<AppRootStateType, string>(state=>state.content.video)

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
                <ContentDescription
                    backdrop_path={backdrop_path}
                    title={title || name}
                    date={release_date || firs_air_date}
                    tagline={tagline}
                    overview={overview}
                    video={video}
                />
            </ContentModal>
            <Pagination
                onPageChange = {changeCurrentPage}
                currentPage={page}
                portionSize={5}
                pagesCount={total_pages}/>
        </div>
    )
}