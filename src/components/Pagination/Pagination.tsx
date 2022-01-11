import React, {useState} from "react";
import s from './Pagination.module.css'


type PaginationPropsType = {
    onPageChange:(newPageNumber:number) => void
    currentPage:number
    portionSize:number
}

export const Pagination: React.FC<PaginationPropsType> = ({onPageChange, portionSize, currentPage}) => {




    const [portionNumber, setPortionNumber] = useState(1)
    const min = (portionNumber - 1) * portionSize + 1;
    const max = portionNumber * portionSize


    const pagesCount = 1000

    const portionCount = Math.ceil(pagesCount / portionSize)

    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    console.log(pages)
    return(
        <>
           <div style={{display:'flex'}}>
               <button
                   disabled={portionNumber<=1}
                   onClick={() => setPortionNumber(portionNumber - 1)}
               >
                   {'<'}

               </button>
               {
                   pages
                       .filter(p => p >= min && p <= max)
                       .map(p => <div key={p} className={`${s.page} ${p === currentPage && s.page__active}`} onClick={()=>{onPageChange(p)}} >{p}</div>)
               }
               {portionCount > portionNumber && <div style={{marginRight: '12px', marginLeft: '12px'}}>...</div>}
               {portionCount > portionNumber &&
               <div className={`${s.page} ${pages.length === currentPage && s.page__active} `} onClick={() => onPageChange(pages.length)}>{pages.length}</div>}
               <button
                   disabled={portionCount <= portionNumber}
                   onClick={() => setPortionNumber(portionNumber + 1)}
               >
                   {'>'}
               </button>
           </div>


        </>
        )

}