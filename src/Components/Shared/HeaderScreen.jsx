import React from 'react'
import { NavLink } from 'react-router-dom'
import { useRef } from 'react'
import './Styles/headerScreen.css'

const HeaderScreen = () => {

    const navbar = useRef()

    const clickMenuHam = () => {
        navbar.current.classList.toggle('navbar-open')
    }

  return (
    <header className='header'>
      <div onClick={clickMenuHam} className='header_menuham'>
        <i className="fa-solid fa-bars"></i>
      </div>
      <nav ref={navbar} className='navbar'>
        <ul className="navbar_list">
          <li className="navbar_items">
            <NavLink to='/' 
              className={({isActive}) => isActive ? 'navbar__link-active navbar__links' : 'navbar__links'}>
              <p className='navbar_label'>Home</p>
            </NavLink>
          </li>
          <li className="navbar_items">
            <NavLink to='/skills' 
              className={({isActive}) => isActive ? 'navbar__link-active navbar__links' : 'navbar__links'}>
              <p className='navbar_label'>Mis habilidades</p>
            </NavLink>
          </li>
          <li className="navbar_items">
            <NavLink to='/portfolio' 
              className={({isActive}) => isActive ? 'navbar__link-active navbar__links' : 'navbar__links'}>
              <p className='navbar_label'>Mi portafolio</p>
            </NavLink>
          </li>
          <li className="navbar_items">
            <NavLink to='/contact' 
              className={({isActive}) => isActive ? 'navbar__link-active navbar__links' : 'navbar__links'}>
              <p className='navbar_label'>Contacto</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>

  )
}

export default HeaderScreen