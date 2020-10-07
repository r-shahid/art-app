import React, { useState, useEffect } from 'react'
// import fJSX from './Search/Search'

const Result = (props) => {
    console.log(props, 'this is props')
    const obj = props.match.params.objectID
    // const result = props.fJSX.filter((item) => item.objectID === props.match.params.objectID)
    //console.log('this is result', result)

    const [result, setResult] = useState([])

    useEffect( async () => {
            const resultsSrc =
                `https://collectionapi.metmuseum.org/public/collection/v1/objects/${obj}`;
                
            const response = await fetch(resultsSrc);
            const cheese = await response.json();

            setResult(cheese)
            // return (
            //     <img src={cheese.primaryImage} alt={cheese.title} />
            // )
        
    }, [])
   
    // const resultSrc =
    //     `https://collectionapi.metmuseum.org/public/collection/v1/objects/${obj}`;

    // const response = await fetch(resultSrc);
    // const cheese = await response.json();
    // console.log(cheese);
    // setResult(cheese)
    //console.log(cheese.primaryImage)
    // console.log(result)
    return (
        <>
            <h1>{result.title}</h1>
            <img src={result.primaryImage} alt={result.title} />
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
            
        </>
    )
}

export default Result