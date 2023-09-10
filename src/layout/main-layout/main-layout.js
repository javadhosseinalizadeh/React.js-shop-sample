import React, { Fragment } from 'react'
import Header from '../../Components/Header/header'
import { ThemeContext, themes } from '../../contexts/DarkModeContext';
import ToggleDark from '../../Components/dark-mode/DarkModeToggle';

const MainLayout = ({children}) => {

  return (
    <Fragment>
        <Header />
        
        <main >
            {children}
        </main>
    </Fragment>
  )
}

export default MainLayout