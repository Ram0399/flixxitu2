import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  // Simulated user object (replace with your actual user data)
  const user = { name: "ram" }; // Set to the actual user object if authenticated

  return (
    <div className="nav">
      <Link to="/" className="nav_logo">
        Flixxit
      </Link>
      {user ? (
        <Link to="/profile" className="nav_avatar">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Netflix Avatar"
          />
        </Link>
      ) : (
        <Link to="/login" className="nav_link">
          Sign In
        </Link>
      )}
    </div>
  );
}

export default Nav;
