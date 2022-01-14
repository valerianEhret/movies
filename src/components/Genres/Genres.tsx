import React, {useEffect} from "react";
import axios from "axios";
import  s from "./Genres.module.css"


type GenreType = {
    id: number
    name: string
}

type GenresPropsType = {
    // selectedGenres: number
    // setSelectedGenres: Function
    genres: Array<GenreType>
    setGenres: Function
    type: string
    // setPage: Function
}

export const Genres: React.FC<GenresPropsType> = ({
                                                      // selectedGenres,
                                                      // setSelectedGenres,
                                                      genres,
                                                      setGenres,
                                                      type,
                                                      // setPage
                                                  }) => {

    const fetchGenres = async () => {
       const response =  await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)

        setGenres(response.data.genres)
    }

    useEffect(()=>{
        fetchGenres()

        return () => {
            setGenres([])
        }

    },[])

    const onGenreChange = (id: number) => {
        console.log(id)
    }

    return (
        <div className={s.container}>
            <div className={s.tagContainer}>
                {genres.map( (g)=>
                    <Genre key={g.id}  id={g.id} name={g.name} />)}
            </div>

        </div>
    )
}


type GenrePropsType = {
    name: string
    id: number
    onGenreChange?: (id:number) => void
}

const Genre:React.FC<GenrePropsType> = ({name, id    }) =>{

    const onChange = (id:number) => {
        console.log(id)
    }


    return (
        <div className={s.tag} onClick={ ()=>{onChange(id)}}>
            <span>{name}</span>
            <i className="material-icons">
                close
            </i>
        </div>
    )
}