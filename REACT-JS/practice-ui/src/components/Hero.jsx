import React from 'react'
import './Hero.scss'

function Hero() {
  return (
    <section className='hero'>
        <div className="featured">
            <h3>Featured</h3>
        </div>
        <div className="details">
            <h1>CineWave</h1>
            <div className="buttons">
                <button className="btn watch">Watch Now</button>
                <button className="btn info">More Info</button>
            </div>
        </div>
        <div className="info">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At earum esse magnam debitis?</p>
        </div>
        <div className="genre">
            <h3 className="browse">Browse by genre</h3>
            <div className="genres">
                <button className="btn-g">Action</button>
                <button className="btn-g">Comedy</button>
                <button className="btn-g">Drama</button>
                <button className="btn-g">Horror</button>
                <button className="btn-g">Romance</button>
                <button className="btn-g">Sci-Fi</button>
            </div>
        </div>
    </section>
  )
}

export default Hero
