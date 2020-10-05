import React from 'react'
import rebecca from './Images/abduction-of-rebecca.jpg'
import renoir from './Images/stilllife-renoir.jpg'
import vincent from './Images/selfportrait-vangogh.jpg'


const Home = () => {

    return (
        <div className="home-page">
            <div className='main'>
                <div className='hero-img'>
                    <div><p className='overlaid-text'>Explore public domain art from the Metropolitan Museum of Art's Collection</p></div>
                    {/* <img src={rebecca} alt='rebecca' /> */}

                </div>
                <div className="main-bottom">
                    <div className='random-img'>
                        <div><p className='overlaid-text'>Show me a random piece of art</p></div>
                    </div>
                    <div className='search-img'>
                        <div><p className='overlaid-text'>I know what I'm looking for...</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home