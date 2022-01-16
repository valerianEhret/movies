import React, {useEffect} from "react";
import axios from "axios";
import s from "./Genres.module.css"
import {fetchMoviesTC} from "../../redux/moviesReducer";
import {useDispatch} from "react-redux";


type GenreType = {
    id: number
    name: string
}

type GenresPropsType = {
    selectedGenres: Array<GenreType>
    setSelectedGenres: Function
    genres: Array<GenreType>
    setGenres: Function
    type: string
}

export const Genres: React.FC<GenresPropsType> = ({
                                                      selectedGenres,
                                                      setSelectedGenres,
                                                      genres,
                                                      setGenres,
                                                      type,
                                                      // setPage
                                                  }) => {


    const dispatch = useDispatch()

    const handleAdd = (genre: GenreType) => {
        setSelectedGenres([...selectedGenres, genre])
        setGenres(genres.filter(g => g.id !== genre.id))
        dispatch(fetchMoviesTC(1))
    }

    const handleDelete = (genre: GenreType) => {
        setSelectedGenres(selectedGenres.filter(g => g.id !== genre.id))
        setGenres([...genres, genre])
        dispatch(fetchMoviesTC(1))
    }

    const fetchGenres = async () => {
        const response = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)

        setGenres(response.data.genres)
    }

    useEffect(() => {
        fetchGenres()

        return () => {
            setGenres([])
        }

    }, [])

    const onGenreChange = (id: number) => {
        console.log(id)
    }

    return (
        <div className={s.container}>
            <div className={s.tagContainer}>
                {selectedGenres && selectedGenres.map((g) =>
                    <Genre key={g.id} genre={g} onClickGenre={handleDelete} className={s.tagSelected}>
                        <i className="material-icons">
                            close
                        </i>
                    </Genre>)}
                {genres && genres.map((g) =>
                    <Genre key={g.id} genre={g} onClickGenre={handleAdd}/>)}
            </div>
        </div>
    )
}


type GenrePropsType = {
    genre: GenreType
    onClickGenre: (genre: GenreType) => void
    className?: string

}

const Genre: React.FC<GenrePropsType> = ({genre, onClickGenre, className, children}) => {

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