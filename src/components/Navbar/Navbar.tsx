import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'

export const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <NavLink to='/trending' >Trending</NavLink>
            <NavLink to={'/movies'}>Movies</NavLink>
            <NavLink to={'/series'}>TV Series</NavLink>
            <NavLink to={'/search'}>Search</NavLink>
        </nav>
    )
}

