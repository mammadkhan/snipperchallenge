import React from 'react'
import style from '../styles/Features.module.scss'

import Snippet from '../images/Customizable Image.png'


const Features: React.FC = () => {
    return(
        <section className={style.Features}>
            <img className={style.featuresImg} src={Snippet} alt="Code snippet" />
            <div className={style.featuresTextArea}>
                <h2 className={style.featuresText}>A fully customizable code snippet editor</h2>
                <p className={style.featureP}>Fully customize the color scheme of your code snippet, or use our own premade color schemes. Export your code snippets in JPG,PDF,PNG, or any of the other 10+ common extentions.</p>
                <button className={style.catButton}>Get started <span>- it's free</span></button>
            </div>
        </section>
    )
}

export default Features