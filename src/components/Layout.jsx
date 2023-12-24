import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './Header'

function Layout(){
    return (
        <>
            <header className='header' >
                <Header/>
            </header>
            
            <main className='main'><Outlet/></main>
            
            <footer className='footer' >footer</footer>
        </>
    )
}

export default Layout