import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import './search.css'
import './search-tab.css'
import './search-desk.css'

const Search = () => {

    const [search, setSearch] = useState('')
    const [results, setResults] = useState([])
    const [fJSX, setFJSX] = useState([])

    const handleSubmit = async (e) => {

        e.preventDefault();

        const imgSrc =
            `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${search}`;

        const response = await fetch(imgSrc);
        const cheese = await response.json();
        console.log(cheese, 'search term');

        if (cheese.objectIDs === null) {
            console.log('no results found')
        }

        const searchResults = cheese.objectIDs.slice(0, 30)
        setResults(searchResults)

        console.log(search)

        /////////////////////////////////////////////////////////////////////////////////
        //////   TAKING THE OBJECT IDS FROM SEARCHRESULTS AND RENDERING THE IMAGES
        /////////////////////////////////////////////////////////////////////////////////
        
    }
//////  ALEX HELPED ME WITH THIS PART
    useEffect(() => {
        const finalJSX = results.map(async (obj) => {
            const searchSrc =
                `https://collectionapi.metmuseum.org/public/collection/v1/objects/${obj}`;
            const response = await fetch(searchSrc);
            const cheese = await response.json();

            return (
                <Link to={`/search/${cheese.objectID}`}><img src={cheese.primaryImage} alt={cheese.title} /></Link>
            )
        })
        Promise.all(finalJSX).then((data) => {
            setFJSX(data)
        })
    }, [results])

    const handleChange = e => {
        const searchTerm = e.target.value;
        setSearch(searchTerm);
    }

    return (
        <>
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