import React from 'react'
import './header.css'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h3>Welcome To</h3>
        <h1>Recipe Builder</h1>
        <h4 className="text-light">Powered by Edemam</h4>
      </div>
    </header>
  )
}

export default Header
