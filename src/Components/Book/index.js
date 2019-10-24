import React from "react";
import { Link } from "react-router-dom";

const bookToIsbn = {
  "Calculus: A Modeling Approach": "0201122162",
  "Chemistry: The Molecular Nature of Matter and Change": "0697396002",
  "Psychology: Themes and Variations": "0495093033",
  "Economics: A Contemporary Introduction": "0538888490",
  "Physics: Principles With Applications": "0136724116"
};

const Book = props => {
  return (
    <div>
      <img
        src={`http://covers.openlibrary.org/b/isbn/${
          bookToIsbn[props.title]
        }-M.jpg`}
      />
      <Link to={`/book/${props.bookid}`}>Title: {props.title}</Link>
      <p>Author: {props.author}</p>
      <p>Publisher: {props.publisher}</p>
      <p>License: {props.license}</p>
      <p>Reviews: {props.reviews.length}</p>
    </div>
  );
};

export default Book;
