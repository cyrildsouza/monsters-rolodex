import React from 'react'
import './searchBoxStyle.css';

const SearchBox = ({ placeholder, handleChange, searchField}) => {
    return (
        <input
        className="search"
        type="search"
        value={searchField}
        placeholder="search monsters"
        onChange={handleChange}/>
    );
}

export default SearchBox

