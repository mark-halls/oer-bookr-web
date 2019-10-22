import React, { useState, useEffect } from "react";
import axios from "axios";

import Book from "../Components/Book";

const HomePage = () => {
  const [bookList, setBookList] = useState();
  useEffect(() => {
    axios
      .get("https://samirlilienfeld-oer-bookr.herokuapp.com/books/books")
      .then(res => {
        setBookList(res.data);
        console.log(res.data);
      });
  }, []);

  if (!bookList) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {bookList.map(book => (
        <Book {...book} key={book.bookid} />
      ))}
    </div>
  );
};

export default HomePage;
