import React from "react";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div className="about-style">
      <ul>
        <li>
          <Link to="/contacts">Contacts </Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
      </ul>
    </div>
  );
}
export default MainPage;
