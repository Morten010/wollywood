import { NavLink } from "react-router-dom"
import style from "./Navbar.module.scss"
import {BiSolidCartAlt} from "react-icons/bi"
import Cart from "./Cart"
import DropDownNav from "./DropDownNav"
import { useState } from "react"

export default function Navbar() {
    const [cartOpen, setCartOpen] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    const handleMenu = () => {
        if(cartOpen) setCartOpen(false)
        setMenuOpen(!menuOpen)
    }
    const handleCart = () => {
        if(menuOpen) setMenuOpen(false)
        setCartOpen(!cartOpen)
    }

  return (
    <nav className={style.nav}>
        <h1>WalleyWood</h1>
        <div
        className={style.right}
        >
            <Cart 
            open={cartOpen}
            setOpen={handleCart}
            />
            <DropDownNav
            open={menuOpen}
            setOpen={handleMenu}
            svgClass={style.hidden}
            />
            <ul>
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
            </ul>
        </div>
    </nav>
  )
}
