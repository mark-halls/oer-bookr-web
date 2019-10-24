import React, { useState, useCallback } from "react";
import { Formik, Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import ReactModal from "react-modal";

import axiosAuth from "../../utils/auth";

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
      <ReactModal
        isOpen={showModal}
        contentLabel="Add Review"
        onRequestClose={closeModal}
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
            <Field
              component="textarea"
              name="review"
              placeholder="Review"
              // value={values.review}
            />
            {/* {touched.review && errors.review && <p>{errors.review}</p>} */}
            <button onClick={closeModal}>Cancel</button>
            <button type="submit">Submit Review</button>
            {existingReview && (
              <button
                onClick={() => {
                  deleteReview();
                  closeModal();
                }}
              >
                Delete Review
              </button>
            )}
          </Form>
        </Formik>
      </ReactModal>
    </>
  );
};

export default ReviewForm;
