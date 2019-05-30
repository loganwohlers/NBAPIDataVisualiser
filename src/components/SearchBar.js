import React from 'react';

const SearchBar = ({ onSearchChange }) => {
    return (
        <div >
            <input className="searchBar" type="search" placeholder="search for player"
                onChange={onSearchChange}
            />
        </div>
    );
}

export default SearchBar;