import React, {useEffect} from "react"
import s from "./Genres.module.css"
import {fetchMoviesTC} from "../../redux/moviesReducer"
import {useDispatch} from "react-redux"
import {api} from "../../api/api";
import {Genre} from "./Genre/Genre";



export type GenreType = {
    id: number
    name: string
}

type GenresPropsType = {
    selectedGenres: Array<GenreType>
    setSelectedGenres: Function
    genres: Array<GenreType>
    setGenres: Function
    type: string
    genreForURL: string
}

export const Genres: React.FC<GenresPropsType> = ({
                                                      selectedGenres,
                                                      setSelectedGenres,
                                                      genres,
                                                      setGenres,
                                                      type,
                                                      genreForURL
                                                  }) => {


    const dispatch = useDispatch()

    const handleAdd = (genre: GenreType) => {
        setSelectedGenres([...selectedGenres, genre])
        setGenres(genres.filter(g => g.id !== genre.id))
        dispatch(fetchMoviesTC(1, genreForURL, type))
    }

    const handleDelete = (genre: GenreType) => {
        setSelectedGenres(selectedGenres.filter(g => g.id !== genre.id))
        setGenres([...genres, genre])
        dispatch(fetchMoviesTC(1, genreForURL, type))
    }

    const fetchGenres = async () => {
        const response = await api.fetchGenres(type)

        setGenres(response.genres)
    }

    useEffect(() => {
        fetchGenres()

        return () => {
            setGenres([])
        }

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


