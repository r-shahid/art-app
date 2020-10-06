import React, { useEffect, useState } from 'react'
import './search.css'

const Search = () => {

    const [search, setSearch] = useState('')
    const [results, setResults] = useState([])
    const [fJSX, setFJSX] = useState([])

    const handleSubmit = async (e) => {

        e.preventDefault();
        // handleSubmit(search);


        const imgSrc =
            `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${search}`;

        const response = await fetch(imgSrc);
        const cheese = await response.json();
        console.log(cheese, 'search term');
        // setSearch(cheese)

        if (cheese.objectIDs === null) {
            console.log('no results found')
        }

        const searchResults = cheese.objectIDs.slice(0, 10)
        console.log(searchResults)
        setResults(searchResults)

        console.log(search)

        /////////////////////////////////////////////////////////////////////////////////
        //////   TAKING THE OBJECT IDS FROM SEARCHRESULTS AND RENDERING THE IMAGES
        /////////////////////////////////////////////////////////////////////////////////

        // const objectID = searchResults.forEach(function(item) {
        //     // console.log(item)
        // })



        // console.log(objectID)

        // const searchSrc =
        //     `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`;


        // const response = await fetch(searchSrc);
        // const cheese = await response.json();
        // console.log(cheese, 'objectID');
        // setRandomImg(cheese)
        // console.log(cheese.primaryImage)


        setSearch('');
    }

    useEffect(() => {
        const finalJSX = results.map(async (obj) => {
            const searchSrc =
                `https://collectionapi.metmuseum.org/public/collection/v1/objects/${obj}`;
            const response = await fetch(searchSrc);
            const cheese = await response.json();

            return await (
                <img src={cheese.primaryImage} alt='' />
            )
        })
        Promise.all(finalJSX).then((data) => {
            setFJSX(data)
        })
    }, [results])


    console.log(results)

    const handleChange = e => {
        const searchTerm = e.target.value;
        setSearch(searchTerm);
        // console.log(searchTerm)
    }



    return (
        <>
            {/* <h1>this is the search page</h1> */}
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} ></input>
                <input className='button' type='submit' value='search'></input>
            </form>

            <div className='search-results'>
                {fJSX}
            </div>
        </>
    )

}

export default Search