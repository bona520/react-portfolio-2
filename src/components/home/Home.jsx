import React from 'react'
import Data from './Data'
import "./home.css"
import Social from './Social'

const Home = () => {
    return (
        <div className="section home section" id='home'>
            <div className="home__container container grid">
                <div className="home__content grid">
                    <Social />
                    <div className="home__img"></div>
                    <Data />
                </div>
            </div>
        </div>
    )
}

export default Home