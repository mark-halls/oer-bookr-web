import React, { useState, useCallback } from "react";
import { Formik, Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import ReactModal from "react-modal";

import axiosAuth from "../../utils/auth";

const ReviewForm = props => {
  console.log(props.reviews);
  const user = localStorage.getItem("username");

  const [showModal, setShowModal] = useState(false);

  const openModal = useCallback(() => setShowModal(true), []);
  const closeModal = useCallback(() => setShowModal(false), []);

  if (!user) {
    return <p>You must be logged in to submit a review.</p>;
  }

  const reviewFilter = props.reviews.filter(review => review.reviewer === user);

  console.log(reviewFilter);

  return (
    <>
      <button onClick={openModal}>Review</button>
      <ReactModal
        isOpen={showModal}
        contentLabel="Add Review"
        onRequestClose={closeModal}
      >
        {/* <Form>
          <Field
            component="textarea"
            name="review"
            placeholder="Review"
            value={values.review}
          />
          {touched.review && errors.review && <p>{errors.review}</p>}
          <button onClick={closeModal}>Cancel</button>
          <button type="submit">Submit Review</button>
        </Form> */}
        <Formik
          initialValues={{
            username: user || null,
            review: reviewFilter[0].review || ""
          }}
          validationSchema={Yup.object().shape({
            review: Yup.string().required("Review can't be empty")
          })}
          onSubmit={values => {
            if (!user) {
              props.history.push("/login");
            }

            if (reviewFilter.length > 0) {
              axiosAuth()
                .delete(`/data/reviews/${reviewFilter[0].reviewid}`)
                .catch(err => console.error(err));
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
          </Form>
        </Formik>
      </ReactModal>
    </>
  );
};

// const FormikReviewForm = withFormik({
//   mapPropsToValues({ review }) {
//     return {
//       username: localStorage.getItem("username") || null,
//       review: review || ""
//     };
//   },

//   validationSchema: Yup.object().shape({
//     review: Yup.string().required("Review can't be empty")
//   }),

//   handleSubmit({ username, review }, { props }) {
//     axiosAuth()
//       .post(`/review/book/${props.match.params.id}`, {
//         reviewer: username,
//         review: review
//       })
//       .then(() => {
//         props.setNewReview(!props.newReview);
//       })
//       .catch(err => {
//         console.error(err);
//         props.history.push("/login");
//       });
//   }
// })(ReviewForm);

// export default FormikReviewForm;

export default ReviewForm;
