import React from "react";
import "./Footer.css"


export default function Footer(){
    return (<div id="footer">
    <footer id="footer-section">
    <div className="footer-item">
        <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-3">
                <h6>Resources</h6>
                
                <p>The benifits of high quality PDF Formatted Notes, Books and more.</p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3">
                <h6>Support</h6>
                
                <p>Get Support for any query by contacting us on our social media portals or by email by clicking <a href="mailto:grcsdevelopersclub@gmail.com" target="/">Here!</a> </p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3">
                <h6>FAQ</h6>
                
                <p>A List of FAQs is available <a href="/FAQs" target="_blank">Here!</a></p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3">
                <h6>Social</h6>
                
                <p>Follow us on Mostly any SNSs</p>
            </div>
        </div>
       
    </div>
    <div className="footer-credits-section">
        <i className="footer-icon fab fa-twitter"></i>
        <i className="footer-icon fab fa-facebook-f"></i>
        <i className="footer-icon fab fa-instagram"></i>
        <a href="mailto:grcsdevelopersclub@gmail.com" target="/"><i className="footer-icon fas fa-envelope"></i></a>
        <p className="footer-icon">© Copyright 2020 GRC's Developers Club</p>
    </div>
</footer>
    </div>);
}