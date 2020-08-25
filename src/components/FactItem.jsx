import React from "react";
import { Link } from "react-router-dom";

export default function FactItem({ id, text }) {
  return (
    <div className="col-xl-3 col-md-4 col-sm-8 mt-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{text}</h5>
          <Link to={`/fact/${id}`}>Read full fact</Link>
        </div>
      </div>
    </div>
  );
}
