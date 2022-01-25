import React from "react"
import s from "./VideoContent.module.css"
import {SingleContent} from "../SingleContent/SingleContent"
import {IContent} from "../../api/api"

type VideoContentPropsType = {
    results:IContent[]
    setModal?: (id:number)=>void

}

export const VideoContent: React.FC<VideoContentPropsType> = ({results, setModal}) => {

    return(
        <div>
            <div className={s.video_content}>
                {results.map((c)=>
                    <SingleContent
                        key={c.id}
                        poster={c.poster_path}
                        id = {c.id}
                        title = {c.title || c.name}
                        date={c.release_date || c.first_air_date}
                        media_type={c.media_type}
                        vote_average={c.vote_average}
                        setModal={ setModal}
                    />)}
            </div>
        </div>
    )
}