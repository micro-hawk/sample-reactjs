import React, {} from "react";
import './App.css'
import Hero from "../Hero/Hero";
import Header from "../Header/Header"
import Footer from "../Footer/Footer";
import WhiteSection from "../Whitesection/Whitesection";
import { TravelLove } from "../TravelLove/TravelLove";

function App() {
  return (<div className="app-body">
  <Header className="header-section"/>
  {/* <Hero bannersrc="./Images/Hero-1.png" bannernextsrc={["./Images/climb.png","./Images/boating.png","./Images/climb.png"]}/> */}
  <Hero />
  <TravelLove cardSrc="./Images/card1.jpg"/>
  <WhiteSection cardBannersrc={["./Images/card1.jpg", "./Images/card2.jpg"]} />
  <Footer/>
  </div>
  ); 
}

export default App;
