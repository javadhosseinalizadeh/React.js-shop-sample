import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './header.modul.css'
const Header = () => {
  return (
    <header className={styles['header']}>
      <nav>        
        <ul>
            <li><NavLink to={'/'}>خانه</NavLink></li>
            <li><NavLink to={'/products'}>محصولات</NavLink></li>
            <li><NavLink to={'/about'}>درباره ما</NavLink></li>
            <li><NavLink to={'/contact'}>تماس با ما</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header