import React from "react"
import s from './SingleContent.module.css'
import {img_300, unavailable} from "../../config/config"


export type SingleContentPropsType = {
    id: number
    poster: string
    title?: string
    date?: string
    media_type: string
    vote_average: number
    adult?: boolean
    backdrop_path?: string
    genre_ids?: Array<number>
    original_language?: string
    original_title?: string
    overview?: string
    video?: boolean
    vote_count?: number
    popularity?: number
}


export const SingleContent: React.FC<SingleContentPropsType> = ({
                                                                    id,
                                                                    poster,
                                                                    title,
                                                                    date,
                                                                    media_type,
                                                                    vote_average
                                                                }) => {
    return (
        <div className={s.media}>
            <div className={s.badge}>
                <span>{vote_average}</span>
            </div>
            <img className={s.poster} src={poster ? `${img_300}/${poster}` : unavailable} alt="title"/>
            <b className={s.title}>{title}</b>
            <div className={s.subTitles}>
                <span className={s.subTitle}>{media_type === 'tv' ? 'TV Series' : 'Movie'}</span>
                <span className={s.subTitle}>{date}</span>
            </div>

        </div>
    )
}