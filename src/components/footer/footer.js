import React, { useState } from "react";
import "./footer.css";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Footer = ({ contentOne }) => {
  const [styleMouse, setStyleMouse] = useState(false);

  const active = contentOne ? "active" : "";

  return (
    <div className="container footer">
      <div className="row">
        <div className="col-6">
          <ul className="footer-menu">
            <li className="number">
              <PhoneAndroidIcon fontSize="small" className="call-icon" />
              Number
            </li>
            <li className="number-not-visiable">+375(33)12-34-567</li>
            <li className="inf-footer">About</li>
            <li className="inf-footer">Your privacy</li>
            <li className="inf-footer">2021 Web-DEV, INC</li>
          </ul>
        </div>
        <div className="col-6">
          <ul className="dot">
            <li>
              <FiberManualRecordIcon
                className={active}
                onMouseOver={() => {
                  document.getElementsByClassName("cursor")[0].style.display =
                    "none";
                }}
                onMouseOut={() => {
                  document.getElementsByClassName("cursor")[0].style.display =
                    "block";
                }}
              />
            </li>
            <li>
              <FiberManualRecordIcon />
            </li>
            <li>
              <FiberManualRecordIcon />
            </li>
            <li>
              <FiberManualRecordIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
