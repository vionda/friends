import React from "react";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/contacts">Contacts </Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}
export default MainPage;
