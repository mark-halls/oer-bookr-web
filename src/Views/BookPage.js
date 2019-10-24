import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactModal from "react-modal";
import styled from "styled-components";

import axiosAuth from "../utils/auth";

import Book from "../Components/Book";
import Review from "../Components/Review";
import ReviewForm from "../Components/Review/ReviewForm";
import DeleteBook from "../Components/Book/DeleteBook";
import { device } from "../Styles/device";

ReactModal.setAppElement("#root");

const Page = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  .book {
    height: 40rem;
  }
`;

const StyledButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1em;
  width: 80%;

  @media ${device.tablet} {
    max-width: 600px;
  }
`;

const BookPage = props => {
  const [book, setBook] = useState();
  const [newReview, setNewReview] = useState();

  const { id } = useParams();

  useEffect(() => {
    axiosAuth()
      .get(`/books/book/${id}`)
      .then(res => {
        setBook(res.data);
      })
      .catch(err => {
        console.error(err);
        props.history.push("/login");
      });
  }, [id, newReview, props.history]);

  return (
    <Page>
      {book && <Book {...book} {...props} />}
      <StyledButtonDiv>
        <DeleteBook {...props} />
        {book && (
          <ReviewForm
            {...props}
            {...book}
            setNewReview={setNewReview}
            newReview={newReview}
          />
        )}
      </StyledButtonDiv>
      {book && book.reviews.length > 0 ? (
        book.reviews.map(review => <Review {...review} key={review.reviewid} />)
      ) : (
        <p></p>
      )}
    </Page>
  );
};

export default BookPage;
