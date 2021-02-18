import React from "react";
import "./header.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import FacebookIcon from "@material-ui/icons/Facebook";


const Header = () => {
  return (
    <div className="container-fluid header">
      <div className="row">
        <div className="col-8">
          <div className="left-block-header">
            <h1 className="logo-header">Web-DEV</h1>
            <div className="mail-header-block">
              <span className="split"> | </span>
              <span className="mail-header">
                <MailOutlineIcon
                  fontSize="small"
                  className="mail-icon-header"
                />
                <span className="name-mail">nikulshin_vlad01@mail.ru</span>
              </span>
            </div>
          </div>
        </div>
        <div className="col-4 contact-block">
          <div className="button-right-block-header">
            <InstagramIcon className="inst-icon" />
          </div>
          <div className="button-right-block-header">
            <FacebookIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
