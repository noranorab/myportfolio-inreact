import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="header_container">
        <h5>Hello, I'm</h5>
        <h1>Noura Bendani.</h1>
        <ul className='text-light'>
          <li className='list'>I'm a Software Engineering student @INPT in Morocco .</li>
          <li className='list'>I'm a Web Developer.</li>
          <li className='list'>I'm a UX Designer.</li>
          <li className='list'>Innovation is my passion.</li>
          <li className='list'>ps: I am also a good painter</li>
        </ul>
        {/*  */}
        <CTA/>
        <HeaderSocials/>
        <section id='up'></section>
        <section id='right'></section>
        <section id='left'></section>
        <section id='down'></section>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
