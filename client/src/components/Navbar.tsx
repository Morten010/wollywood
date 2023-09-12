import { NavLink } from "react-router-dom"
import style from "./Navbar.module.scss"

export default function Navbar() {
  return (
    <nav className={style.nav}>
        <h1>WalleyWood</h1>
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
    </nav>
  )
}
