import React, {ChangeEvent, useEffect, useState} from "react"
import s from './Search.module.css'
import {useDispatch, useSelector} from "react-redux";
import {fetchSearchTC, fetchVideoContentTC, InitialStateType} from "../../redux/moviesReducer";
import {VideoContent} from "../../components/VideoContent/VideoContent";
import {AppRootStateType} from "../../redux/store";
import {Pagination} from "../../components/Pagination/Pagination";

export const Search = () => {

    const dispatch = useDispatch()
    const [type, setType] = useState('movie')
    const [searchText, setSearchText] = useState('')
    // const [content, setContent] = useState('')
    // const [numOfPages, setNumOfPages] = useState('')
    const {results, page, total_pages} = useSelector<AppRootStateType, InitialStateType>(state=>state.movies)

   const onChangeClick = (e:ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value)
    }

    const changeCurrentPage = (newPageNumber:number) => {
        dispatch(fetchSearchTC(type, searchText, newPageNumber ))
    }


    const onClickMovies = () => {
        setType('movie')
        console.log(type)

    }

    const onClickSeries = () => {
        setType('tv')
        console.log(type)

    }


   // const onSearch = () => {
   //     dispatch(fetchSearchTC(type, searchText, 1 ))
   //
   // }


   useEffect(  ()=>{
       window.scroll(0,0)
       dispatch(fetchSearchTC(type, searchText, 1 ))
   }, [type, page, searchText])


    return (
        <div className={s.block}>
            <input value={searchText}   onChange={onChangeClick} placeholder='SEARCH'/>
            {/*<button  className={s.btn}*/}
            {/*         onClick={onSearch}*/}
            {/*>*/}
            {/*    Search*/}
            {/*    /!*<span className="material-icons">search</span>*!/*/}
            {/*</button>*/}

            <a href="#" className="btn-order" onClick={onClickMovies}>Search movies</a>
            <a href="#" className="btn-order" onClick={onClickSeries}>Search TV Series</a>
            {/*<button className={s.btn} onClick={onClickMovies}>Search movies</button>*/}
            {/*<button className={s.btn} onClick={onClickSeries}>Search TV Series</button>*/}
            {searchText  && results.length === 0 ? <h2>Movies Not Found </h2> :
                <div>
                    <VideoContent results={results}/>
                    { results.length !== 0 && <Pagination
                        onPageChange = {changeCurrentPage}
                        currentPage={page}
                        portionSize={5}
                        pagesCount={total_pages}/>}
                </div>

            }


        </div>
    )
}
