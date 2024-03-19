import React from "react";
import "./Homepage.css";
import { useLocation } from "react-router-dom";

function Home() {
  let location = useLocation();
  return (
    <div className="home" style={{ minHeight: "80vh" }}>
      <div className="info">
        <img
          className="w-100 h-100"
          style={{ minHeight: "85vh" }}
          src="https://www.code-brew.com/wp-content/uploads/2018/06/197470-OYF57A-37.jpg"
        ></img>
        <div class="text">
          <h2>Shop with</h2>
          <h1 className="con display-1" style={{ color: "#ffb5b5" }}>
            Confidence
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Home;