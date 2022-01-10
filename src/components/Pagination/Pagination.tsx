import React, {useState} from "react";

type PaginationPropsType = {
    onPageChange:(newPageNumber:number) => void
}

export const Pagination: React.FC<PaginationPropsType> = ({onPageChange}) => {



    const portionSize = 5
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
                       .map(p => <div key={p} onClick={()=>{onPageChange(p)}} >{p}</div>)
               }
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