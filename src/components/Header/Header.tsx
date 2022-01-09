import React from 'react'
import s from './Header.module.css'

export const Header = () => {
    return (
        <div className={s.header}>
            <span onClick={()=>window.scroll(0,0)}>Movies</span>
        </div>
    )
}

