import React from "react";

const Review = props => {
  return (
    <div>
      <p>User: {props.reviewer}</p>
      <p>Review: {props.review}</p>
    </div>
  );
};

export default Review;
