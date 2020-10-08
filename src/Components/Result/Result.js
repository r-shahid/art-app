import React, { useState, useEffect } from 'react'
import './result-tab.css'
// import fJSX from './Search/Search'

const Result = (props) => {
    console.log(props, 'this is props')
    const obj = props.match.params.objectID

    const [result, setResult] = useState([])
    const [extraOne, setExtraOne] = useState([])
    const [extraTwo, setExtraTwo] = useState([])
    const [extraThree, setExtraThree] = useState([])

    useEffect(async () => {
        const resultsSrc =
            `https://collectionapi.metmuseum.org/public/collection/v1/objects/${obj}`;

        const response = await fetch(resultsSrc);
        const cheese = await response.json();

        setResult(cheese)

    }, [])

    const onLoad1 = async () => {
        let extra1 = Math.floor(Math.random() * 823616)
            const extra1Src =
                `https://collectionapi.metmuseum.org/public/collection/v1/objects/${extra1}`;

            const response = await fetch(extra1Src);
            const cheese = await response.json();

            setExtraOne(cheese);
        if (cheese.primaryImage === undefined || cheese.isPublicDomain === false) {
            onLoad1()
        }
            onLoad2();
    }
    const onLoad2 = async () => {

        let extra2 = Math.floor(Math.random() * 823616)

        
            const extra2Src =
                `https://collectionapi.metmuseum.org/public/collection/v1/objects/${extra2}`;

            const response = await fetch(extra2Src);
            const cheese = await response.json();

            setExtraTwo(cheese)
        if (cheese.primaryImage === undefined || cheese.isPublicDomain === false) {
            onLoad2()
        }
            onLoad3();
    }
    const onLoad3 = async () => {


        let extra3 = Math.floor(Math.random() * 823616)

            const extra3Src =
                `https://collectionapi.metmuseum.org/public/collection/v1/objects/${extra3}`;

            const response = await fetch(extra3Src);
            const cheese = await response.json();

            setExtraThree(cheese)
        if (cheese.primaryImage === undefined || cheese.isPublicDomain === false) {
            onLoad3()
        }
       
    }


    return (
        <>
            <div className='result-info' onLoad={onLoad1}>
                <div className='result-img'><img src={result.primaryImage} alt={result.title} /></div>
                <div className='result-details'>
                    <h1>{result.title}</h1>
                    <h3>{result.artistDisplayName}</h3>
                    <h4>{result.artistDisplayBio}</h4>
                    <p>
                        Department: {result.department}
                        <br />
                        Dimensions: {result.dimensions}
                        <br />
                        Medium: {result.medium}
                        <br />
                        Credit: {result.creditLine}
                    </p>
                    <a className='more-info' href={result.objectURL}>More Info</a>
                </div>

            </div>
            <div className='more'>
                <h2>See More</h2>
                <div className='more-results'>
                <div className='extra-img'><a href={extraOne.objectURL}><img src={extraOne.primaryImage} alt={extraOne.title} /></a></div>
                    <div className='extra-img'><a href={extraTwo.objectURL}><img src={extraTwo.primaryImage} alt={extraTwo.title} /></a></div>
                    <div className='extra-img'><a href={extraThree.objectURL}><img src={extraThree.primaryImage} alt={extraThree.title} /></a></div>
            </div>
            </div>
            
        </>
    )
}

export default Result