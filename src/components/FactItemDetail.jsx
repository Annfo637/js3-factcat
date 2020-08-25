import React from "react";

export default function FactItemDetail({ text, name, upvotes }) {
  //console.log(text);
  return (
    <div className="col-xl-4 col-md-6 col-sm-12 mt-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{text}</h5>
          <p>Author: {name}</p>
          <p>Votes: {upvotes}</p>
        </div>
      </div>
    </div>
  );
}
