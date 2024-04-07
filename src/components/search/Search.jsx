import { SearchInput, SearchIcon, SearchStyle } from "./searchStyle";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <>
      <SearchStyle>
        <SearchIcon>
          <FaSearch size={20} />
        </SearchIcon>
        <SearchInput type="text" placeholder="BUSCA" />
      </SearchStyle>
    </>
  );
};

export default Search;
