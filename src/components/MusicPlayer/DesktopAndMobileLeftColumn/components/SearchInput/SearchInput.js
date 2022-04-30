import React from 'react';
import './SearchInput.css';

const SearchInput = ({onSearch}) => {
    return <div style={{textAlign: 'center'}}>
        <input type="text" className="searchInput" name="searchArtist" onChange={onSearch} placeholder="Search artist" />
    </div>
}

export default SearchInput;