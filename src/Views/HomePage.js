import React, { useState, useEffect } from "react";
import styled from "styled-components";

import axiosAuth from "../utils/auth";
import Book from "../Components/Book";
import SearchForm from "../Components/SearchForm";

const StyledPage = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const StyledBookList = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;

  &:div {
    height: 30em;
  }
`;

const HomePage = props => {
  const [bookList, setBookList] = useState();
  const [dataToDisplay, setDataToDisplay] = useState();

  useEffect(() => {
    axiosAuth()
      .get("/books/books", {})
      .then(res => {
        setBookList(res.data);
      })
      .catch(err => {
        console.error(err);
        props.setLoginToken(false);
        props.history.push("/login");
      });
  }, [props.history]);

  useEffect(() => {
    bookList && setDataToDisplay(bookList);
  }, [bookList]);

  if (!dataToDisplay) {
    return <div>Loading...</div>;
  }

  return (
    <StyledPage>
      <SearchForm data={bookList} setDataToDisplay={setDataToDisplay} />
      <StyledBookList>
        {dataToDisplay.map(book => (
          <Book {...book} key={book.bookid} />
        ))}
      </StyledBookList>
    </StyledPage>
  );
};

export default HomePage;
