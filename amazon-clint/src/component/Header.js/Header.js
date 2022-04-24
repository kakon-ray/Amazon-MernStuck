import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import "./Header.css";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  const logOut = () => {
    signOut(auth);
  };

  console.log(user);
  return (
    <div className="nav">
      <div className="container ">
        <div className="flex">
          <Link to="/" className="logo">
            Amazon
          </Link>
          <ul className="manu">
            <Link to="/" style={{ textDecoration: "none", color: "gray" }}>
              <li>Home</li>
            </Link>
            <Link to="/shop" style={{ textDecoration: "none", color: "gray" }}>
              <li>Shop</li>
            </Link>
            <Link to="/order" style={{ textDecoration: "none", color: "gray" }}>
              <li>Order</li>
            </Link>
            {user ? (
              <li>
                <button onClick={logOut} style={{ cursor: "pointer" }}>
                  Logout
                </button>
              </li>
            ) : (
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "gray" }}
              >
                <li>Login</li>
              </Link>
            )}

            <Link
              to="/manage"
              style={{ textDecoration: "none", color: "gray" }}
            >
              <li>Manage</li>
            </Link>
          </ul>
          <span>{user ? <p>{user.email}</p> : ""}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
