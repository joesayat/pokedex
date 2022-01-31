import React from "react";

const SearchBox = ({ onSearchInput }) => {

  return (
    <input 
      className="search-input w-25 ba b--slime-10 pa3 mv5"
      type="search" 
      placeholder="Search for pokemon" 
      onChange={onSearchInput}
    />
  )
}

export default SearchBox;