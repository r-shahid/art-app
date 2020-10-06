import React from 'react'

const Result = (props) => {
    console.log(props, 'this is props')
    const result = props.filter((item) => {
        item.objectID === props.match.params.objectID
    })
    // console.log('this is result', result)

    return(
        <>
        <h1>this is results</h1>
        <p>{result.objectID}</p>
        </>
    )
}

export default Result