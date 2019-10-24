import React, { useState, useEffect } from "react";

import axiosAuth from "../utils/auth";

import Book from "../Components/Book";
import SearchForm from "../Components/SearchForm";

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
    <div>
      <SearchForm data={bookList} setDataToDisplay={setDataToDisplay} />
      <div>
        {dataToDisplay.map(book => (
          <Book {...book} key={book.bookid} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
