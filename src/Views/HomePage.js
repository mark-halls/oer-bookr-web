import React, { useState, useEffect } from "react";
import axios from "axios";

import Book from "../Components/Book";
import SearchForm from "../Components/SearchForm";

const HomePage = () => {
  const [bookList, setBookList] = useState();
  const [dataToDisplay, setDataToDisplay] = useState();

  useEffect(() => {
    axios
      .get("https://samirlilienfeld-oer-bookr.herokuapp.com/books/books")
      .then(res => {
        setBookList(res.data);
      });
  }, []);

  useEffect(() => {
    bookList && setDataToDisplay(bookList);
  }, [bookList]);

  if (!dataToDisplay) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <SearchForm data={bookList} setDataToDisplay={setDataToDisplay} />
      {dataToDisplay.map(book => (
        <Book {...book} key={book.bookid} />
      ))}
    </div>
  );
};

export default HomePage;
