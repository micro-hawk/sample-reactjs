import React from "react"
import "./HeaderFeature.css"


export default function HeaderFeature(props){
    return (
        <div className="HeaderFeature">
            <a href="/">
            <i className={'fas '+props.icon}></i>
            <span>
              Review
            </span>
            </a>
          </div>
    );
}