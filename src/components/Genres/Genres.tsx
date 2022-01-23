import React, {useEffect} from "react"
import s from "./Genres.module.css"
import {fetchVideoContentTC} from "../../redux/moviesReducer"
import {useDispatch, useSelector} from "react-redux"
import {Genre} from "./Genre/Genre";
import {appActions, fetchGenresTC, InitialStateType} from "../../redux/genresReducer"
import {AppRootStateType} from "../../redux/store"



export type GenreType = {
    id: number
    name: string
}

type GenresPropsType = {
    selectedGenres: Array<GenreType>
    setSelectedGenres: Function
    type: string
    genreForURL: string
}

export const Genres: React.FC<GenresPropsType> = ({
                                                      selectedGenres,
                                                      setSelectedGenres,
                                                      type,
                                                      genreForURL
                                                  }) => {


    const dispatch = useDispatch()
    const {genres} = useSelector<AppRootStateType, InitialStateType>(state=>state.genres)

    const handleAdd = (genre: GenreType) => {
        setSelectedGenres([...selectedGenres, genre])
        dispatch(appActions.setGenres(genres.filter(g => g.id !== genre.id)))
        dispatch(fetchVideoContentTC(1, genreForURL, type))
    }

    const handleDelete = (genre: GenreType) => {
        setSelectedGenres(selectedGenres.filter(g => g.id !== genre.id))
        dispatch(appActions.setGenres([...genres, genre]))
        dispatch(fetchVideoContentTC(1, genreForURL, type))
    }


    useEffect(() => {
        dispatch(fetchGenresTC(type))
    }, [])


    return (
        <div className={s.container}>
            <div className={s.tagContainer}>
                {selectedGenres && selectedGenres.map((g) =>
                    <Genre key={g.id} genre={g} onClickGenre={handleDelete} className={s.genre__active}>
                        <i className="material-icons">
                            close
                        </i>
                    </Genre>)}
                {genres && genres.map((g) =>
                    <Genre key={g.id} genre={g} onClickGenre={handleAdd} className={''}/>)}
            </div>
        </div>
    )
}


