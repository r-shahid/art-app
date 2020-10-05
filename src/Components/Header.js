import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {

    return(
        <div className='navbar'>
            <div>
                <Link to="/">
                    <span className='logo'>artAPP</span>
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