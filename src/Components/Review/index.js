import React from "react";
import styled from "styled-components";

const StyledReviewCard = styled.div`
  margin: 1em;
  padding: 1em;
  background-color: #f2f2e2;
  border-radius: 10px;

  div {
    display: flex;
    align-items: center;
  }

  img {
    height: 1em;
    padding-right: 0.5em;
  }
`;

const StyledReview = styled.p`
  margin-top: 0.5em;
  font-style: italic;
`;

const Review = props => {
  return (
    <StyledReviewCard>
      <div>
        <img src="/images/user.jpg" />
        <span>{props.reviewer}</span>
      </div>
      <StyledReview>{props.review}</StyledReview>
    </StyledReviewCard>
  );
};

export default Review;
