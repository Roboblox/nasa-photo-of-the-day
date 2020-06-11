import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { BASE_URL, API_KEY } from "../constants";
import Header from "./header/Header";
import Details from "./details/Details";

function App() {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [copyright, setCopyright] = useState("");
  const [date, setDate] = useState("");
  const [explanation, setExplanation] = useState("");
  // const [details, setDetails] = useState("");
  // const [isDetailsVisable, setIsDetailsVisable] = useState("false");

  // const [currentFriendId, setCurrentFriendId] = useState(null)

  useEffect(() => {
    // this code runs after DOM surgery

    axios
      .get(`${BASE_URL}api_key=${API_KEY}`)
      .then((res) => {
        console.log(res.data);
        setImage(res.data.url);
        setTitle(res.data.title);
        setDate(res.data.date);
        setExplanation(res.data.explanation);
        setCopyright(res.data.copyright);
      })
      .catch((err) => {
        debugger;
      });
  }, []);
  return (
    <div className="App">
      <Header title={title} />

      <span role="img" aria-label="go!">
        🚀
        <img src={image} alt="" />
      </span>
      {/* <button onClick={details}>Details</button> */}
      <Details date={date} explanation={explanation} copyright={copyright} />
    </div>
  );
}

export default App;
