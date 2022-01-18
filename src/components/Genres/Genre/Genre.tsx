import React from "react";
import s from "./Genre.module.css";
import {GenreType} from "../Genres";

type GenrePropsType = {
    genre: GenreType
    onClickGenre: (genre: GenreType) => void
    className: string

}

export const Genre: React.FC<GenrePropsType> = ({genre, onClickGenre, className, children}) => {
    debugger
    const finalClassName = `${s.tag} ${className}`

    return (
        <div className={finalClassName} onClick={() => {
            onClickGenre(genre)
        }}>
            <span>{genre.name}</span>
            {children}
        </div>
    )
}