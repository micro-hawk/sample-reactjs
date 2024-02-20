import React from "react";
import "./Whitesection.css"
import Hotelcard from "../Hotelcard/Hotelcard"

window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  }, false);

export default function WhiteSection(props){
    return (<div id="white-section">
        <div className="context-heading">
          <h1>Featured Locations</h1>
        </div>

        <div className="card-container">
           <Hotelcard hotelImage={props.cardBannersrc[0]} discount="-42%"/>
           <Hotelcard hotelImage={props.cardBannersrc[1]} titleName="Italy"/>
           <Hotelcard hotelImage={props.cardBannersrc[1]} priceTag = "8000" discount="-7%" />
      </div>
    </div>);
}