import React, {useEffect, useState} from "react"
import {SingleContent} from "../../components/SingleContent/SingleContent"
import {useDispatch, useSelector} from "react-redux"
import {AppRootStateType} from "../../redux/store"
import s from './Trending.module.css'
import {Pagination} from "../../components/Pagination/Pagination";
import {fetchTrendingTC, InitialStateType} from "../../redux/trendingReducer";

export const Trending = () => {

    // const [currentPage, setCurrentPage] = useState(1)

    const dispatch = useDispatch()
    const {page} = useSelector<AppRootStateType, InitialStateType>(state=>state.trending)
    // const [currentPage, setCurrentPage] = useState(1)



    const {results} = useSelector<AppRootStateType, InitialStateType>( state => state.trending)

    const changeCurrentPage = (newPageNumber:number) => {
        dispatch(fetchTrendingTC(newPageNumber))
        // setCurrentPage(newPageNumber)
    }

    useEffect( ()=>{
        dispatch(fetchTrendingTC(page))
    },[])

    return (
        <div className={s.trending_block}>
            <span className={'pageTitle'}>Trending</span>
            <div className={s.trending}>
                {results.map((c)=>
                    <SingleContent
                        key={c.id}
                        poster={c.poster_path}
                        id = {c.id}
                        title = {c.title || c.name}
                        date={c.release_date || c.first_air_date}
                        media_type={c.media_type}
                        vote_average={c.vote_average}
                    />)}
            </div>
            <div className={s.pagination}>
                <Pagination onPageChange = {changeCurrentPage} currentPage={page} portionSize={5} pagesCount={20}/>
            </div>
            {/*<div className={s.test}>*/}
            {/*    {results.map((c)=>*/}
            {/*        <SingleContent*/}
            {/*            key={c.id}*/}
            {/*            poster={c.poster_path}*/}
            {/*            id = {c.id}*/}
            {/*            title = {c.title || c.name}*/}
            {/*            date={c.release_date || c.first_air_date}*/}
            {/*            media_type={c.media_type}*/}
            {/*            vote_average={c.vote_average}*/}
            {/*        />)}*/}
            {/*</div>*/}

        </div>
    )
}
