import React from "react";
import "./footer.css";
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

const Footer = () => {
  return (
    <div className="container footer">
      <div className="row">
        <div className="col-6">
          <ul className="footer-menu">
            <li><PhoneAndroidIcon fontSize="small" className="call-icon"/> Number</li>
            <li>About</li>
            <li>Your privacy</li>
            <li>2021 Web-DEV, INC</li>
          </ul>
        </div>
        <div className="col-6">
         
        </div>
      </div>
    </div>
  );
};

export default Footer;
