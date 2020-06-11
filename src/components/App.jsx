import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import styled from "styled-components";
import { BASE_URL, API_KEY } from "../constants";
import Header from "./header/Header";
import Details from "./details/Details";

function App() {
  const [data, setData] = useState({});

  // const [details, setDetails] = useState("");
  // const [isDetailsVisable, setIsDetailsVisable] = useState("false");

  // const [currentFriendId, setCurrentFriendId] = useState(null)

  useEffect(() => {
    // this code runs after DOM surgery

    axios
      .get(`${BASE_URL}api_key=${API_KEY}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        debugger;
      });
  }, []);
  return (
    <div className="App">
      <Header title={data.title} />
      <Details date={data.date} explanation={data.explanation} />
      🚀🚀🚀🚀🚀🚀🚀🚀🚀 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
      🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 🚀🚀🚀🚀🚀🚀🚀🚀🚀
      <span role="img" aria-label="go!">
        <img src={data.url} alt={data.title} />
      </span>
    </div>
  );
}

export default App;
