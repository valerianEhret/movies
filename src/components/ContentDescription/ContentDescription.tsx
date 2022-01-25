import s from './ContentDescription.module.css'
import {img_500, unavailable, unavailableLandscape} from "../../config/config";
import React from "react";

type ContentDescriptionPropsType = {

}

export const ContentDescription = () => {
    return (
        <div className={s.block}>
            {/*<img src={poster_path?`${img_500}/${poster_path}`: unavailable} alt="poster"/>*/}
            {/*<img src={backdrop_path?`${img_500}/${backdrop_path}`: unavailableLandscape} alt="poster"/>*/}
        </div>
    )
}