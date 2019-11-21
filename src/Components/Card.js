import React from "react";
import "./Card.style.css";

export default ({ photo_url, name, email }) => {
  return (
    <div className="card">
      <img src={photo_url} />
      <br />
      <h3>{name}</h3>
      <h4>{email}</h4>
    </div>
  );
};
