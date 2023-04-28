import React from 'react'
import './footer.css'
import {SlSocialFacebook} from 'react-icons/sl'
import {SlSocialLinkedin} from 'react-icons/sl'

const footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>NB</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>about</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="" target="_blank"><SlSocialFacebook className='facebook'/></a>
        <a href="" target="_blank"><SlSocialLinkedin className='linkedin'/></a>       
      </div>

      <div className="footer_copyright">
        <small>&copy; NB Portfolio. All rights reserved</small>
      </div>
    </footer>
  )
}

export default footer
