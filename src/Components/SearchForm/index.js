import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Search = styled.section`
  font-size: 3rem;

  input {
    width: 100%;
    padding: 0;
    border-width: 0px;
    border: none;
    height: 100%;
  }
`;

export default function SearchForm(props) {
  const setSearchResults = props.setDataToDisplay;

  const [searchTerm, setSearchTerm] = useState("");
  const [dataToSearch] = useState(props.data);

  const handleChange = event => setSearchTerm(event.target.value);

  useEffect(() => {
    const results = dataToSearch.filter(book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, setSearchResults, dataToSearch]);

  return (
    <Search className="search-form">
      <input placeholder="Search" value={searchTerm} onChange={handleChange} />
    </Search>
  );
}
