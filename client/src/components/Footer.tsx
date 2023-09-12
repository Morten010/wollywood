import style from "./Footer.module.scss"
import {FaPinterestSquare} from "react-icons/fa"
import {BsInstagram} from "react-icons/bs"
import {AiFillFacebook, AiFillTwitterSquare} from "react-icons/ai"

export default function Footer() {
  return (
    <footer
    className={style.footer}
    >
        <div className={style.info}>
            <div>
                <span>WalleyWood</span>
                <p>
                    øster uttrupvej 1 <br />
                    9000 Aalborg
                </p>
            </div>
            <ul>
                <li>
                    CVR: 12345678
                </li>
                <li>
                    <a href="mailto:info@plakatshoppen.dk">
                        info@plakatshoppen.dk
                    </a>
                </li>
                <li>
                    <a href="tel:98123456">
                        #45 98123456
                    </a>
                </li>
            </ul>
        </div>
        <div className={style.icons}>
            <FaPinterestSquare />
            <BsInstagram />
            <AiFillFacebook />
            <AiFillTwitterSquare />
        </div>
    </footer>
  )
}
