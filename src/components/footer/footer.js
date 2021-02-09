import React from "react";
import "./footer.css";
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';


const Footer = () => {
  return (
    <div className="container footer">
      <div className="row">
        <div className="col-6">
          <ul className="footer-menu">
            <li className="number"><PhoneAndroidIcon fontSize="small" className="call-icon"/> Number</li>
            <li className="number-not-visiable">+375331234567</li>
            <li className="inf-footer">About</li>
            <li className="inf-footer">Your privacy</li>
            <li className="inf-footer" >2021 Web-DEV, INC</li>
          </ul>
        </div>
        <div className="col-6">
         
        </div>
      </div>
    </div>
  );
};

export default Footer;
