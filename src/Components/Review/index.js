import React from "react";

const Review = props => {
  return (
    <div>
      <p>{props.reviewer}</p>
      <p>{props.review}</p>
    </div>
  );
};

export default Review;
