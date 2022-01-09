import React, {useEffect, useState} from "react"
import {SingleContent} from "../../components/SingleContent/SingleContent";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {fetchTrendingTC, InitialStateType} from "../../redux/reducer";
import s from './Trending.module.css'

export const Trending = () => {

    const dispatch = useDispatch()
    const {results} = useSelector<AppRootStateType, InitialStateType>( state => state.app)

    useEffect( ()=>{
        dispatch(fetchTrendingTC())
    },[])

    return (
        <>
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
        </>
    )
}
