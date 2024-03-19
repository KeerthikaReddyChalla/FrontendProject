import React from "react";
import { useLocation } from "react-router-dom";
import "./NavigationBar.css";

function Details() {
  let location = useLocation();
  let user = location.state;
  return (
    <div className="details">
      <div style={{ minHeight: "85vh" }}>
        <div className="container ">
          <img src={user.image} className="w-25 h-25  border-secondary"></img>
          <div className="desc">
            <h1 className="fs-4">{user.title}</h1>
            <h1 className="fs-4">Category:{user.category}</h1>
            <h1 className="fs-4">Price:USD.{user.price}</h1>
            <br />
            <h1 className="fs-6 p-2 text-dark">
              <u>Description:</u>
              {user.description}
            </h1>
            <button
              type="button"
              className="btn p-2 m-1"
              style={{ backgroundColor: "#ffcbcb" }}
            >
              Buynow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;