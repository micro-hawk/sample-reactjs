import React from 'react';
import "./TravelLove.css";
export function TravelLove(props){
    return (
        <div id="destination-love ">
        <div className="row">
        <div className="context-heading col-lg-12">
                <h1>Lovable Destinations</h1>
            </div>
        </div>
            
            <div className="row">
            <div className="love-card col-lg-3 col-md-6">
                <img src={props.cardSrc} alt="love card"></img>
                <h2 className="title">Lorem ipsum dolor </h2>
            </div>

            <div className="love-card col-lg-3 col-md-6">
                <img src={props.cardSrc} alt="love card"></img>
                <h2 className="title">Lorem ipsum dolor </h2>
            </div>

            <div className="love-card col-lg-3 col-md-6">
                <img src={props.cardSrc} alt="love card"></img>
                <h2 className="title">Lorem ipsum dolor </h2>
            </div>

            <div className="love-card col-lg-3 col-md-6">
                <img src={props.cardSrc} alt="love card"></img>
                <h2 className="title">Lorem ipsum dolor </h2>
            </div>
            </div>
            


        </div>
    );
}