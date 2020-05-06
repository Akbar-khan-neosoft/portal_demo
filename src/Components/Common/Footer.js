import React, { Component } from 'react';
import "../../Assets/CSS/Footer.css"

class Footer extends Component {

	render() {
		
        return (
            <div className="container-footer">
                 <div className="footer-content">
                  <div className="footer-content-container">
                    <div className="footer-content-title">About Company</div>
                    <br></br>

                                    <div className="footer-content-body">
                                        <br></br>
                                        Contact information
                                        <br></br>
                                        Email : abx
                                        <br></br>
                                        Phone : 000000000
                                        <br></br>
                                        Address : mmm
                                    </div>
                                    </div>
                               
                <div className="footer-content-container">
                    <div className="footer-content-title">Information</div>
                    <br></br>
                    <div className="footer-content-body">
                        <ul style={{ listStyle: 'none' }}>
                        <li>Terms and Conditions</li>
                        <li>Gurantee and Return Policy</li>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                        <li>Locate Us</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-content-container">
                    <div className="footer-content-title">Newsletter</div>
                    <br></br>
                    <div className="footer-content-body">
                        Signup to get exclusive offer from our favorite brands and to be well up in the news
                        <br></br>
                        <br></br>
                        <form>
                            <input type="text" placeholder="Your Email" style={{ width: '50%' }}></input>
                            <br></br>
                            <br></br>
                            <button style={{ width: '40%', borderRadius: '10px' }}>Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="footer-info">
                Copyright 2020 xyz Technologies All rights reserved | Design By Akbar Khan
            </div>
        </div>
        );
        }
    }
export default Footer