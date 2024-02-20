import React from "react";
import HeaderFeature from "../HeaderFeature/HeaderFeature";
import "./Header.css";

export default function Header() {
  return (
    <div className="HeaderSticky sticky">
      <header>
        <nav className="HeaderNav">
          <span className="HeaderFeatureLogo">TravelHere</span>
          <div className="HeaderFeatureGroup ">
          <div className="HeaderFeatureGroupDiv">
          <HeaderFeature icon="fa-pencil-alt" icon-title="Review" />
            <HeaderFeature icon="fa-bell" icon-title="Alert" />
            <HeaderFeature icon="fa-heart" icon-title="Saves" />
            <input type="submit" value="Login"/>
          </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
