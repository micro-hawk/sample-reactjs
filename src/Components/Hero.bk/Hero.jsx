import React from "react";
import "./Hero.css";

export default function Hero(props) {
  return (
    <div>
      <div className="hero-section row">
        <div className="col-lg-6 col-md-12" id="header-context">
          <h2 className="header-context-heading">
            Lorem ipsum dolor sit amet.
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <input
            className="explore-btn"
            type="submit"
            name="Explore"
            value="Explore"
          />
        </div>
        <img
          className="hero-banner col-lg-6 col-md-12"
          src={props.bannersrc}
          alt="banner"
        ></img>
      </div>
      {/* <div id="hero-next-bg row">
        <h3 className="hero-next-heading col-lg-12">Lorem ipsum</h3>

        <img
          className="hero-next-img col-lg-3 col-md-12"
          src={props.bannernextsrc[0]}
          alt="banner"
        ></img>
        <img
          className="hero-next-img col-lg-3 col-md-12"
          src={props.bannernextsrc[1]}
          alt="banner"
        ></img>
        <img
          className="hero-next-img col-lg-3 col-md-12"
          src={props.bannernextsrc[2]}
          alt="banner"
        ></img>
      </div> */}
    </div>
  );
}
