import React from "react";

import Book from "../Components/Book";

const BookPage = () => {
  const reviews = [{}];
  const book = {};
  return (
    <div>
      <Book {...book} />
      {reviews.map(review => (
        <Review {...review} />
      ))}
    </div>
  );
};

export default BookPage;
