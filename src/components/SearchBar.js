import React from 'react';

const SearchBar = ({ onSearchChange }) => {
    return (
        <div>
            <input type="search" placeholder="search for player"
                onChange={onSearchChange}
            />
        </div>
    );
}

export default SearchBar;