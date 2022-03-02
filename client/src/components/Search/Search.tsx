import React, {ChangeEvent, useEffect, useRef, useState} from "react";
import {useAppContext} from "context/AppContext";
import Container from "./utils/Container";
import SearchIcon from "./utils/SearchIcon";
import SearchInput from "./utils/SearchInput";

const Search = () => {
  const {handleSearchChange} = useAppContext();
  const [searchTerm, setSearchTerm] = useState("");
  const searchOnInputChange = useRef({});

  searchOnInputChange.current = (term: string) => {
    handleSearchChange(term);
  };

  useEffect(() => {
    typeof searchOnInputChange?.current === "function" && searchOnInputChange?.current(searchTerm);
  }, [searchTerm]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputVal = event?.target?.value;
    setSearchTerm(inputVal);
  };

  return (
    <Container>
      <SearchIcon />
      <SearchInput
        placeholder="Search…"
        inputProps={{"aria-label": "search"}}
        value={searchTerm}
        onChange={handleChange}
      />
    </Container>
  );
};

export default Search;
