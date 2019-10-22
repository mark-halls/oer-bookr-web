import React from "react";

import Book from "../Components/Book";
import Review from "../Components/Review";

const BookPage = () => {
  const reviews = [{}];
  const book = {};
  return (
    <div>
      <Book {...book} />
      {reviews.map(review => (
        <Review {...review} key={review.reviewid} />
      ))}
    </div>
  );
};

export default BookPage;
