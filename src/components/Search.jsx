import React from 'react'

const Search = ({searchTerm, setSearchTerm}) => {
    return (
        <div className='Search'>

            <img src="search.svg" alt="Search" />

            <input 
            type='text'
            placeholder='Search through thousands of Movies'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            ></input>

        </div>
    )
}

export default Search