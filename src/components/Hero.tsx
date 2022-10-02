import React from 'react'
import style from '../styles/Hero.module.scss'

import Snippet from '../images/Snippet Image.png'

const Hero: React.FC = () => {
    return(
            <main className={style.Hero}>
                <div className={style.HeroBG}></div>
                <div className={style.HeroTextArea}>
                    <h1 className={style.HeroText}>Gorgeous Code Snippets</h1>
                    <p className={style.HeroP}>With Snipper, create fully customizable code snippets in a matter of seconds right from your browser.</p>
                    <button className={style.catButton}>Get started <span>- it's free</span></button>
                    <p className={style.mark}>No credit card required.</p>
                </div>
                <img src={Snippet} alt="Code snippet" />
            </main>
    )
}

export default Hero