import React, {useState} from 'react'
import './random.css'

const Random = () => {

    const [gifSrc, setGifSrc] = useState({})

    const handleSubmit = async () => {

        let randomimg = Math.floor(Math.random() * 823616)

        const gifSrc =
            `https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomimg}`;
        
        console.log (randomimg)

        const response = await fetch(gifSrc);
        const cheese = await response.json();
        console.log(cheese, 'objectID');
        setGifSrc(cheese)
        console.log(cheese.primaryImage)

        if (cheese.primaryImage === undefined || cheese.isPublicDomain === false){
            handleSubmit()
        }

    };

    return (
        <>
        {/* <h1>this is the random page</h1> */}
            <div><button onClick={handleSubmit}>Random</button></div>
            <div>
                <img src={gifSrc.primaryImage} alt="" />
            </div>
        </>
    )
}

export default Random