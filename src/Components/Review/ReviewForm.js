import React, { useState, useCallback } from "react";
import { Formik, Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

import axiosAuth from "../../utils/auth";
import { StyledModal, CustomStyles } from "../../Styles/StyledModal";

const StyledTextArea = styled(Field)`
  width: 100%;
  height: 10em;
`;

const StyledDeleteButton = styled.button`
  background-color: #ff9999;
`;

const StyledSubmitButton = styled.button`
  background-color: #99ffaf;
`;

const StyledButtonDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;

  button {
    margin-top: 0.5em;
  }
`;

const ReviewForm = props => {
  const user = localStorage.getItem("username");

  let existingReview;
  const reviewFilter = props.reviews.filter(review => {
    if (review.reviewer === user) {
      existingReview = review.review;
      return review;
    }
  });

  const [showModal, setShowModal] = useState(false);

  const openModal = useCallback(() => setShowModal(true), []);
  const closeModal = useCallback(() => setShowModal(false), []);

  const deleteReview = useCallback(() => {
    axiosAuth()
      .delete(`/data/reviews/${reviewFilter[0].reviewid}`)
      .then(() => {
        closeModal();
        props.setNewReview(!props.newReview);
      })
      .catch(err => console.error(err));
  });

  if (!user) {
    return <p>You must be logged in to submit a review.</p>;
  }

  return (
    <>
      {existingReview ? (
        <button onClick={openModal}>Edit Review</button>
      ) : (
        <button onClick={openModal}>Review</button>
      )}
      <StyledModal
        isOpen={showModal}
        contentLabel="Add Review"
        onRequestClose={closeModal}
        style={CustomStyles}
      >
        <Formik
          initialValues={{
            username: user || null,
            review: existingReview || ""
          }}
          validationSchema={Yup.object().shape({
            review: Yup.string().required("Review can't be empty")
          })}
          onSubmit={values => {
            if (!user) {
              props.history.push("/login");
            }

            if (existingReview) {
              deleteReview();
            }

            axiosAuth()
              .post(`/review/book/${props.match.params.id}`, {
                reviewer: user || null,
                review: values.review || ""
              })
              .then(() => {
                closeModal();
                props.setNewReview(!props.newReview);
              })
              .catch(err => {
                console.error(err);
                props.history.push("/login");
              });
          }}
        >
          <Form>
            <StyledTextArea
              component="textarea"
              name="review"
              placeholder="Review"
              // value={values.review}
            />
            {/* {touched.review && errors.review && <p>{errors.review}</p>} */}
            <StyledButtonDiv>
              <button onClick={closeModal}>Cancel</button>
              {existingReview && (
                <StyledDeleteButton
                  onClick={() => {
                    deleteReview();
                    closeModal();
                  }}
                >
                  Delete Review
                </StyledDeleteButton>
              )}
              <StyledSubmitButton type="submit">
                Submit Review
              </StyledSubmitButton>
            </StyledButtonDiv>
          </Form>
        </Formik>
      </StyledModal>
    </>
  );
};

export default ReviewForm;
