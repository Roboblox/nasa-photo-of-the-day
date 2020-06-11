import React, { useState } from "react";
import styled from "styled-components";

function Details(props) {
  const [showDetails, setShowDetails] = useState(false);

  // exports a styled div
  // should bring in the .container styles inside styles.less

  const tablet = "(max-width: 800px)";

  const StylesDetails = styled.div`
    @media ${tablet} {
      color: purple;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      margin-bottom: 2rem;
      border-radius: 0.5rem;
      color: aqua;
      background-color: brown;
    }
    span {
      display: flex;
      flex-direction: column;
      align-items: center;
      p {
        color: bisque;
        width: 50%;
      }
    }
  `;

  return (
    <StylesDetails>
      <button onClick={() => setShowDetails(!showDetails)}>Details</button>
      {showDetails && (
        <div>
          {" "}
          <span>
            <h1>{props.date}</h1>
            <p>{props.explanation}</p>
          </span>
        </div>
      )}
    </StylesDetails>
  );
}

export default Details;
