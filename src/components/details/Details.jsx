import React from "react";

function Details(props) {
  return (
    <div>
      <span>
        <h1>{props.date}</h1>
        <p>{props.explanation}</p>
        <p>{props.copyright}</p>
      </span>
    </div>
  );
}

export default Details;
