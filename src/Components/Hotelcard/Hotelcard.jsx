import React from "react";
// import $ from 'jquery';
// import "Hotelcard.css"



export default function Hotelcard(props){
    const price = props.priceTag ? props.priceTag : 0;
    const title = props.titleName ? props.titleName : 'xyz';
    // const discount=props.discount;
    return(<div className="card">
    {props.discount && <span className="discount">{props.discount}</span>}
    <img src={props.hotelImage} alt="banner"></img>
    <div className="content">
      <h3 className="title">{title}</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam .</p>

        <div className="hotel-card-action row">
             <div className="price-tag col-lg-6 col-md-12">
                 <h4> ₹ {price}</h4>
                </div>
                <div className="col-lg-6 col-md-12">
                <div className="stars">
                     <i className="fas fa-star"></i>
                     <i className="fas fa-star"></i>
                     <i className="fas fa-star"></i>
                     <i className="fas fa-star"></i>
                     <i className="fas fa-star-half-alt"></i>
                </div>

            <a href="/"><button className="btn">Book!</button></a>

                </div>


        


        </div>

     </div>
 </div>);
}