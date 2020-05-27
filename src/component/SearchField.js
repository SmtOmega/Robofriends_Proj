import React from 'react';

export const Search = ({searchChange})=>{
    return(
        <div className="search-field">
            <input type='search' placeholder='search your robot friends' onChange={searchChange}/>
        </div>
    )
}
