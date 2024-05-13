import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { SearchStyle, SearchIcon, SearchInput } from './searchStyle';

const SearchBar = () => {
  return (
    <SearchStyle>
      <SearchIcon>
        <FaSearch size={20} />
      </SearchIcon>
      <SearchInput type="text" placeholder="BUSCA" />
    </SearchStyle>
  );
};

export default SearchBar;
