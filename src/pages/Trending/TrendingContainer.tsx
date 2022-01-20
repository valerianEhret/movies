import React, {useEffect} from "react"
import {VideoContent} from "../../components/VideoContent/VideoContent"
import {useDispatch, useSelector} from "react-redux"
import {AppRootStateType} from "../../redux/store"
import {InitialStateType} from "../../redux/moviesReducer"
import s from "./TrendingContainer.module.css"
import {Pagination} from "../../components/Pagination/Pagination"
import {fetchTrendingTC} from "../../redux/trendingReducer";

export const TrendingContainer = () => {

    const dispatch = useDispatch()
    const {page, results, total_pages} = useSelector<AppRootStateType, InitialStateType>(state=>state.trending)

    const changeCurrentPage = (newPageNumber:number) => {
        dispatch(fetchTrendingTC(newPageNumber))
    }

    useEffect( ()=>{
        dispatch(fetchTrendingTC(page))
    },[])

    return (
        <div className={s.video_content_block}>
            <VideoContent results={results}/>
            <Pagination
                onPageChange = {changeCurrentPage}
                currentPage={page} portionSize={5}
                pagesCount={total_pages}/>
        </div>
    )
}