import React from "react";
import "./header.css";

function Header(props) {
  return (
    <div>
      <header>
        <h1>Image Of The Day</h1>
        <h2>{props.title}</h2>
      </header>
    </div>
  );
}

export default Header;
