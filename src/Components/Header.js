import React from 'react'
import {Link} from 'react-router-dom'
import Logo from './Images/art-logo.png'

const Header = () => {

    return(
        <div className='navbar'>
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
            <div>
                <Link to="/search">
                    Search
                    </Link>
                    </div>
        </div>
    )
}

export default Header