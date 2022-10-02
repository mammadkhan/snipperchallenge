import React from 'react'
import style from '../styles/Header.module.scss'

import { ReactComponent as Logo } from '../images/Logo.svg'
import { ReactComponent as Menu } from '../images/Hamburger Menu.svg'
import { ReactComponent as Search } from '../images/Search Icon.svg'

const Header: React.FC = () => {
    return(
        <header className={style.Header}>
            <a href="/"><Logo /></a>
            <button className={style.hamMenu}><Menu /></button>
            <div className={style.headerDesk}>
                <Search />
                <a href="/">Sign in</a>
                <button className={style.catButton}>Get started <span>- it's free</span></button>
            </div>
        </header>
    )
}

export default Header