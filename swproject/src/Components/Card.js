import React from "react";

function Card({ name, image }) {
  return (
    <div className="card mb-5" style={{ width: "13rem" }}>
      <img src={image} className="card-img-top" alt={name} style={{ aspectRatio: "1/1" }} />
      <div className="card-body">
        <h6 className="card-title">{name}</h6>
      </div>
    </div>
  );
}

export default Card;
