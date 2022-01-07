import React, {useEffect, useState} from "react"
import {SingleContent} from "../../components/SingleContent/SingleContent";
import {api, IContent} from "../../api/api";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {fetchTrendingTC} from "../../redux/reducer";

export const Trending = () => {

    const dispatch = useDispatch()
    const results = useSelector<AppRootStateType, IContent[]>( state => state.app)

    useEffect( ()=>{
        dispatch(fetchTrendingTC())
    },[])

    return (
        <>
     <span className='pageTitle'>Trending</span>
            <div className='trending'>
                {JSON.stringify(results)}
                {/*{content  && content.map(c=> <SingleContent />)}*/}
            </div>
        </>
    )
}
