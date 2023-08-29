import React, { Fragment } from 'react'
import Header from '../../Components/Header/header'

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