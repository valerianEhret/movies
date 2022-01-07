import React, {useEffect, useState} from "react"
import {SingleContent} from "../../components/SingleContent/SingleContent";
import {api} from "../../api/api";

export const Trending = () => {

    const [content, setContent] = useState([])


    let response = null
    useEffect( ()=>{
        response = api.fetchTrending()

    },[])

    return (
        <>
     <span className='pageTitle'>Trending</span>
            <div className='trending'>
                {JSON.stringify(response)}
                {/*{content  && content.map(c=> <SingleContent/>)}*/}
            </div>
        </>
    )
}
