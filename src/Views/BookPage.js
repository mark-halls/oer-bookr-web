import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Book from "../Components/Book";
import Review from "../Components/Review";
import axios from "axios";

const BookPage = props => {
  const [book, setBook] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://samirlilienfeld-oer-bookr.herokuapp.com/books/book/${id}`)
      .then(res => {
        setBook(res.data);
      });
  }, [id]);

  return (
    <div>
      {book && <Book {...book} {...props} />}
      <div>
        <button>Write a review</button>
      </div>
      {book && book.reviews.length > 0 ? (
        book.reviews.map(review => <Review {...review} key={review.reviewid} />)
      ) : (
        <p>No reviews</p>
      )}
    </div>
  );
};

export default BookPage;
