import React from "react";
import "./footer.css";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Footer = ({
  contentOne,
  selectTwo,
  contentTwo,
  contentThree,
  contentFour,
  update,
}) => {
  const activeOne = contentOne ? "active" : "";
  const activeTwo = contentTwo ? "active" : "";
  const activeThree = contentThree ? "active" : "";
  const activeFour = contentFour ? "active" : "";

  const hide = () => {
    document.getElementsByClassName("cursor")[0].style.display = "block";
  };

  const uncovered = () => {
    document.getElementsByClassName("cursor")[0].style.display = "none";
  };

  const selectNewPage = (numberPage) => {
    const statePage = numberPage == 1 ? true : false;
    console.log(statePage);
    selectTwo(numberPage, statePage);
  };

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
            <li className="inf-footer">2021 Web-DEV, INC</li>
          </ul>
        </div>
        <div className="col-6">
          <ul className="dot">
            <li>
              <FiberManualRecordIcon
                className={`${activeOne} select-dot`}
                onMouseOver={() => uncovered()}
                onMouseOut={() => hide()}
                onClick={() => {
                  selectNewPage(1);
                }}
              />
            </li>
            <li>
              <FiberManualRecordIcon
                onMouseOver={() => uncovered()}
                onMouseOut={() => hide()}
                className={`${activeTwo} select-dot`}
                onClick={() => {
                  selectNewPage(2);
                }}
              />
            </li>
            <li>
              <FiberManualRecordIcon
                onMouseOver={() => uncovered()}
                onMouseOut={() => hide()}
                className={`${activeThree} select-dot`}
                onClick={() => {
                  selectNewPage(3);
                }}
              />
            </li>
            <li>
              <FiberManualRecordIcon
                onMouseOver={() => uncovered()}
                onMouseOut={() => hide()}
                className={`${activeFour} select-dot`}
                onClick={() => {
                  selectNewPage(4);
                }}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
