import React from "react";
import "./Hero.css";

export default function Hero(props) {
  
  

  function scrollingEffect() {
    let text = document.getElementById("text");
  let bird1 = document.getElementById("bird1");
  let bird2 = document.getElementById("bird2");
  // let btn = document.getElementById("btn");
  let rocks = document.getElementById("rocks");
  let forest = document.getElementById("forest");
  // let water = document.getElementById("water");

    let value = window.scrollY;
    text.style.top = 40 + value * -0.5 + "%";
    bird1.style.top = value * -1.5 + "px";
    bird1.style.left = value * 2 + "px";

    bird2.style.top = value * -1.5 + "px";
    bird2.style.left = value * -5 + "px";

    // btn.style.marginTop = value * 1.7 + "px";
    rocks.style.top = value * 0.12 + "px";
    forest.style.top = value * 0.25 + "px";
    // water.style.left = value * 0.25 + 'px';
  }

  window.addEventListener("scroll", scrollingEffect);

  return (
    <div className="AnimHeroSection">
      <section id="parallax">
        <h2 id="text">
          <span>It's time for a new</span><br/>Adventure & Tour
        </h2>
        <img src="./Images/bird1.png" id="bird1" alt="bird1" />
        <img src="./Images/bird2.png" id="bird2" alt="bird2" />
        <img src="./Images/forest.png" id="forest" alt="forest" />
        <div id="btn">
        <div className="InlineSearchBar">
        <i class="fas fa-search"></i>
        <input  type="search" placeholder="Where to?"/>
        </div>
        </div>
        <img src="./Images/rocks.png" id="rocks" alt="rocks" />
        <img src="./Images/water.png" id="water" alt="water" />
      </section>
    </div>
  );
}
