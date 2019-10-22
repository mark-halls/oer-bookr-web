import React from "react";
import { Link } from "react-router-dom";

const Book = props => {
  return (
    <div>
      <Link to={`/book/${props.bookid}`}>Title: {props.title}</Link>
      <p>Author: {props.author}</p>
      <p>Publisher: {props.publisher}</p>
      <p>License: {props.license}</p>
      <p>Reviews: {props.reviews.length}</p>
    </div>
  );
};

export default Book;
