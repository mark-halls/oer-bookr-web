import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Book from "../Components/Book";
import Review from "../Components/Review";
import axios from "axios";

const BookPage = props => {
  const [book, setBook] = useState();
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://samirlilienfeld-oer-bookr.herokuapp.com/books/book/${id}`)
      .then(res => {
        setBook(res.data);
      });
  }, [id]);

  useEffect(() => {
    if (book) {
      async function fetchReviews() {
        const reviewsArray = await Promise.all(
          book.reviews.map(async review => {
            const response = await axios.get(
              `https://samirlilienfeld-oer-bookr.herokuapp.com/reviews/review/${review}`
            );
            return response.data;
          })
        );
        setReviews(reviewsArray);
      }

      fetchReviews(book.reviews);
    }
  }, [book]);

  return (
    <div>
      {book && <Book {...book} {...props} />}
      <div>
        <button>Write a review</button>
      </div>
      {reviews.length > 0 ? (
        reviews.map(review => <Review {...review} key={review.reviewid} />)
      ) : (
        <p>No reviews</p>
      )}
    </div>
  );
};

export default BookPage;
