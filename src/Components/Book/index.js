import React from "react";

const Book = props => {
  return (
    <div>
      <h3>Title: {props.title}</h3>
      <p>Author: {props.author}</p>
      <p>Publisher: {props.publisher}</p>
      <p>License: {props.license}</p>
      <p>Reviews: {props.reviews.length}</p>
    </div>
  );
};

export default Book;
