import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Search = styled.section`
  margin-top: 0.25em;
  font-size: 3rem;
  max-width: 700px;
  width: 90%;
  height: 1.5em;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

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
