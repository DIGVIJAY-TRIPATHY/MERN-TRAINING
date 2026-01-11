import React from 'react'
import './Header.scss'

function Header() {
  return (
    <header className="header">
      <div className="name">
        <h1>CineWave</h1>
      </div>
      <div className="description">
        <ul className='ul'>
          <li><a href="#">Home</a></li>
          <li><a href="#">Series</a></li>
          <li><a href="#">Movies</a></li>
          <li><a href="#">Discover</a></li>
          <li><a href="#">Watch later</a></li>
        </ul>
      </div>
      <div className="search">
        <button>🔎</button>
        <img src="" alt="logo" />
      </div>
    </header>
  )
}

export default Header
