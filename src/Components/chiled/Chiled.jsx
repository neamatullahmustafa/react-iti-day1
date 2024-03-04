import React from "react";

export default function Chiled(props) {
  return (
    <>
      <div className="card p-3" >
        <img src={props.pro.image} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5> {props.pro.title}</h5>
          <p className="card-text">
          {props.pro.description}
          </p>
        </div>
      </div>
    </>
  );
}
