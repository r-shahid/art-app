import React, { useState } from 'react'
import './random.css'
import './random-tab.css'

const Random = () => {

    const [randomImg, setRandomImg] = useState({})

    const handleSubmit = async () => {

        let randomimg = Math.floor(Math.random() * 823616)

        const imgSrc =
            `https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomimg}`;

        //example with no dimension
        // const imgSrc =
        //     `https://collectionapi.metmuseum.org/public/collection/v1/objects/108209`;

        // console.log(randomimg)

        const response = await fetch(imgSrc);
        const cheese = await response.json();
        console.log(cheese, 'objectID');
        setRandomImg(cheese)
        console.log(cheese.primaryImage)

        if (cheese.primaryImage === undefined || cheese.isPublicDomain === false) {
            handleSubmit()
        }

        //this part isn't working. the console log comes out fine, but the dimension value still shows as blank
        // if (cheese.dimensions === ""){
        //     console.log('no img dimensions')
        //     randomImg.dimensions = "none"
        // }

    };

    return (
        <>
            {/* <h1>this is the random page</h1> */}
            <div><button onClick={handleSubmit}>Random</button></div>
            <div className='random-result'>
                <img src={randomImg.primaryImage} alt="" />
                <div className='details'>
                    <h1>{randomImg.title}</h1>
                    <h3>{randomImg.artistDisplayName}</h3>
                    <h4>{randomImg.artistDisplayBio}</h4>
                    <p>
                        Department: {randomImg.department}
                        <br />
                        Dimensions: {randomImg.dimensions}
                        <br />
                        Medium: {randomImg.medium}
                        <br />
                        Credit: {randomImg.creditLine}
                    </p>
                    <a className='more-info' href={randomImg.objectURL}>More Info</a>
                </div>
            </div>
        </>
    )
}

export default Random