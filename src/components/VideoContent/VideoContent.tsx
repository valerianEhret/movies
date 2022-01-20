import React from "react";
import s from "./VideoContent.module.css";
import {SingleContent} from "../SingleContent/SingleContent";
import {IContent} from "../../api/api";

type VideoContentPropsType = {
    // type: string
    // title: string
    results:IContent[]
    // pagesCount:number
    // page:  number
}

export const VideoContent: React.FC<VideoContentPropsType> = ({results}) => {

    return(
        <div>
            {/*<span className={s.page_title}>{title}</span>*/}
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
        </div>
    )
}