import React from 'react'
import {NavLink} from 'react-router-dom'
import ProductCartIcon from '../product-cart/product-cart-icon'
import styles from './header.modul.css'
import { useSelector } from 'react-redux'
import { ThemeContext, themes } from '../../contexts/DarkModeContext';
import ToggleDark from '../../Components/dark-mode/DarkModeToggle';
const Header = () => {
  const [darkMode, setDarkMode] = React.useState(true);

      const counter = useSelector((store)=> store) 

  return (
    <header className={styles['header']}>
      <nav>        
        <ul>
            <li><span>حالت شب</span>
            <ThemeContext.Consumer>
        {({ changeTheme }) => (
          <ToggleDark
            toggleDark={() => {
              setDarkMode(!darkMode);
              changeTheme(darkMode ? themes.light : themes.dark);
            }}
          />
        )}
      </ThemeContext.Consumer>
            </li>
            <li><NavLink to={'/'}>خانه</NavLink></li>
            <li><NavLink to={'/products'}>محصولات</NavLink></li>
            <li><NavLink to={'/about'}>درباره ما</NavLink></li>
            <li><NavLink to={'/contact'}>تماس با ما</NavLink></li>
            <li> 
              <NavLink to={'/cart'}> <ProductCartIcon size={counter.cart.cartItems.length} /></NavLink>
            </li>
        </ul>
        
      </nav>
      
    </header>
  )
}

export default Header