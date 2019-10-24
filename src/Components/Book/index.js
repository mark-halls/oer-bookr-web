import React from "react";
import { Link } from "react-router-dom";

const bookToIsbn = {
  Macroeconomics: "0538880457",
  Precalculus: "0673158721",
  "Electromagnetism, 2E": "0471927120",
  Engineering: "0023071303",
  "Linear algebra": "0201526751",
  "The American Pageant": "0618247327",
  Thermodynamics: "0070683050",
  Microeconomics: "0471457698",
  Calculus: "0534936245",
  "Applied calculus": "0534419585",
  "Calculus: A Modeling Approach": "0201122162",
  "Chemistry: The Molecular Nature of Matter and Change": "0697396002",
  "Psychology: Themes and Variations": "0495093033",
  "Economics: A Contemporary Introduction": "0538888490",
  "Physics: Principles With Applications": "0136724116"
};

const Book = props => {
  return (
    <div>
      <img
        src={`http://covers.openlibrary.org/b/isbn/${
          bookToIsbn[props.title]
        }-M.jpg`}
      />
      <Link to={`/book/${props.bookid}`}>Title: {props.title}</Link>
      <p>Author(s): {props.author}</p>
      <p>Publisher: {props.publisher}</p>
      <p>License: {props.license}</p>
      <p>Reviews: {props.reviews.length}</p>
      <p>
        <span>{`Read Now: `}</span>
        <a
          href={`https://openlibrary.org/isbn/${bookToIsbn[props.title]}`}
          target="_blank"
        >
          openlibrary.org
        </a>
      </p>
    </div>
  );
};

export default Book;
