import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Book from "../Components/Book";
import Review from "../Components/Review";
import ReviewForm from "../Components/Review/ReviewForm";

const BookPage = props => {
  const [book, setBook] = useState();
  const [newReview, setNewReview] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://samirlilienfeld-oer-bookr.herokuapp.com/books/book/${id}`)
      .then(res => {
        setBook(res.data);
      });
  }, [id, newReview]);

  return (
    <div>
      {book && <Book {...book} {...props} />}
      <div>
        <ReviewForm
          {...props}
          setNewReview={setNewReview}
          newReview={newReview}
        />
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
