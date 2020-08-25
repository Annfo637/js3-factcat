import React from "react";
import { Link } from "react-router-dom";

export default function LayoutSimple({ children }) {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <Link className="btn btn-primary btn-display m-2" to="/">
          Home
        </Link>
        <Link className="btn btn-primary btn-display m-2" to="/fact-list">
          Go to Facts
        </Link>
      </div>
      {children}
    </div>
  );
}
