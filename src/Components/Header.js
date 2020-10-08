import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Images/art-logo.png'

const Header = () => {

    return (
        <div className='navbar'>
            <div className='og-items'>
                <div>
                    <Link to="/">
                        <img className='header-logo' src={Logo} alt="logo" />
                    </Link>
                </div>
                <div>
                    <Link to="/random">
                        Random
                    </Link>
                </div>
                <div className='search-word'>
                    <Link to="/search">
                        Search
                    </Link>
                </div>
            </div>
            <div className='search-icon'>
                <Link to="/search">
                    <i class="fas fa-search"></i>
                </Link>
            </div>
        </div>
    )
}

export default Header