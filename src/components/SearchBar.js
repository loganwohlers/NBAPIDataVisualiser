import React from 'react';

const SearchBar = ({ onSearchChange }) => {
    return (
        <div>
            <input type="search" placeholder="search players"
                onChange={onSearchChange}
            />
        </div>
    );
}

export default SearchBar;