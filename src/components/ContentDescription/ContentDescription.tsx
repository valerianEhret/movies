import s from './ContentDescription.module.css'
import {img_500, unavailableLandscape} from "../../config/config";
import React, {FC} from "react";



type ContentDescriptionPropsType = {
    backdrop_path: string
    title?: string | null
    date?: string | null
    tagline: string
    overview: string
    video:string
}

export const ContentDescription: FC<ContentDescriptionPropsType> = (
    {backdrop_path, title, date, tagline, overview, video}
) => {
    return (
        <div className={s.block}>
            <img src={backdrop_path ? `${img_500}/${backdrop_path}` : unavailableLandscape} alt="poster"/>
            <div>
                <span>{title || ''}</span>
                <span>{` (${date}) ` || ` `}</span>
            </div>
            <span className={s.tagline}>{tagline}</span>
            <span className={s.description}>{overview}</span>
            <a href={`https://www.youtube.com/watch?v=${video}`}>Watch the Trailer</a>
        </div>
    )
}