
import s from "./Header.module.scss"
import logo from "../icon/Union.svg" 


const Header = () =>{
    return(
        <header className={s.header}>
            <img className={s.icon} src={logo} />
            <nav className={s.nav}>
                <a href="#" className={s.nav__link}>Home</a>
                <a href="#" className={s.nav__link}>Market Place</a>
                <a href="#" className={s.nav__link}>All NFTs</a>
                <a href="#" className={s.nav__link}>Activities</a>
            </nav>
            <img src={"../icon/icon button"} className={s.tap} />
        </header>
    )
}

export default Header