import React, { useEffect, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { NavLink, useLocation } from 'react-router-dom'
import style from "./DropwDownNav.module.scss"

export default function DropDownNav({
    open,
    setOpen,
    svgClass
} : {
    open: boolean
    setOpen: () => void
    svgClass: string
}) {
    const location = useLocation()

    useEffect(() => {
      setOpen()
    }, [location])
    
  return (
    <>
        <AiOutlineMenu 
        className={svgClass}
        onClick={() => setOpen()}
        />
        {open && <ul className={style.dropNav}>
            <li>
                <NavLink
                to="/"
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                to="/plakater"
                >
                    Plakater
                </NavLink>
            </li>
            <li>
                <NavLink
                to="/om"
                >
                    Om Os
                </NavLink>
            </li>
            <li>
                <NavLink
                to="/kontakt"
                >
                    Kontakt
                </NavLink>
            </li>
            <li>
                <NavLink
                to="/login"
                >
                    Log in
                </NavLink>
            </li>
        </ul>}
    </>
  )
}
