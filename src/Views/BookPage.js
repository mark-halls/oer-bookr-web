import React from "react";

import Book from "../Components/Book";
import Review from "../Components/Review";

const BookPage = () => {
  const reviews = [
    { review: "Much math, wow!", reviewer: "Doge", reviewid: 1 }
  ];
  const book = {
    author: "test",
    bookid: 1,
    license: "MIT",
    publisher: "testing clearing house",
    title: "Calc 1",
    reviews: reviews.length
  };

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
