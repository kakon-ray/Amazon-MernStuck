import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container container">
      <div className="home-content">
        <h1>New Collection For Fall</h1>
        <p>Discover all the new arrivals of ready-to-wear collection.</p>
        <Link to="/shop">
          <button className="button button1">Shop Now</button>
        </Link>
      </div>
      <div className="home-img">
        <img
          src="https://andshop-react.netlify.app/static/media/product4.0d1ab934.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
