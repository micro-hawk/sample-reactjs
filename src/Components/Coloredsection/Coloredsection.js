import React from "react";
import "./Coloredsection.css"

export default function ColoredSection(props){
    return (
    
    <div id="colored-section">
        <div className="context-heading">
            <h1>Recent Visits</h1>
        </div>
        <div className="colored-content-left row">
            <div className="col-lg-6 col-md-12">
                <h2>LMAO CITY</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proidenlaboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumt, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
            <div className="col-lg-6 col-md-12">
                <img className= "colored-image-right" src={props.bannersrc} alt="banner"></img>
            </div>
        </div>

        <div className="colored-content-right row">
        <div className="col-lg-6 col-md-12">
            <img className= "colored-image-left" src={props.bannersrc} alt="banner"></img>
            </div>
             <div className="col-lg-6 col-md-12">
                <h2>FUI CITY</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumlaboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>


        </div>
    </div>
    
    );
}