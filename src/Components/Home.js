import React from 'react'
import {Link} from 'react-router-dom'


const Home = () => {

    return (
        <div className="home-page">
            <div className='main'>
                <div className='hero-img'>
                    <div>
                        <h1 className='headline'>Welcome!</h1>
                        <p className='overlaid-text'>Explore public domain art from the Metropolitan Museum of Art's Collection</p></div>

                </div>
                <div className="main-bottom">
                    <div className='random-img home-page-links'>
                        <Link to='/random' ><div><p className='overlaid-text'>Show me a random piece of art</p></div></Link>
                    </div>
                    <div className='search-img home-page-links'>
                        <Link to='/search'><div><p className='overlaid-text'>I know what I'm looking for...</p></div></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home