import React from "react";

const Book = props => {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.author}</p>
      <p>{props.description}</p>
      <p>{props.publisher}</p>
      <p>{props.license}</p>
      <div>Reviews</div>
    </div>
  );
};

export default Book;
