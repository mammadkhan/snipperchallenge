import React from 'react'
import style from '../styles/Footer.module.scss'

import { ReactComponent as Logo } from '../images/Logo.svg'

const Footer: React.FC = () => {
    return(
        <footer className={style.Footer}>
            <Logo />
            <div className={style.footerLinks}>
                <a href="/">Terms and Conditions</a>
                <a href="/">Privacy Policy</a>
            </div>
        </footer>
    )
}

export default Footer