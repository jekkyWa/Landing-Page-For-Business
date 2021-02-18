import React from "react";
import "./mobile-content.css";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";
import AspectRatioIcon from "@material-ui/icons/AspectRatio";
import MinimizeIcon from "@material-ui/icons/Minimize";
import Img_1 from "../../image/img_1.png";
import Example_1 from "../../image/example_1.png";
import Example_2 from "../../image/example_2.png";
import Example_3 from "../../image/example_3.png";
import Example_4 from "../../image/example_4.png";
import { _dataSlide, _dataDescriptionSlide, _nameProject } from "./data";

const MobileContent = () => {
  const images = [Example_1, Example_2, Example_3, Example_4];
  return (
    <div className="content-block-one-mobile">
      <h1>Why pay too much for quality when you can use "Web-DEV"</h1>
      <div className="terminal-mobile">
        <div className="container-fluid header-terminal">
          <div className="row">
            <div className="col-8 way-mobile">
              <h1>
                <IndeterminateCheckBoxIcon
                  fontSize="small"
                  className="icon-terminal-mobile"
                />
                Web-DEV:\Creating_your_Project
              </h1>
            </div>
            <div className="col-4 ">
              <div className="panel-icon">
                <MinimizeIcon className="btn-terminal-mobile" />
                <AspectRatioIcon className="btn-terminal-mobile" />
                <CancelPresentationIcon className="btn-terminal-mobile" />
              </div>
            </div>
          </div>
        </div>
        <div className="body-terminal-mobile">
          <h1>Web-DEV:~ Creation of a quality project...</h1>
          <h1>Web-DEV:~ Project compited</h1>
        </div>
      </div>
      <div className=" content-two-body-mobile">
        <h1>Why should you choose me?</h1>
        <p>
          Work with projects of any complexity. I don't have a long track
          record. But I always ready to learn
        </p>
        <h1>Why shouldn't you choose me</h1>
        <p>There are no such reasons</p>
        <img className="img-mac-mobile" src={Img_1} />
      </div>
      <div className="sample-project-mobile">
        <h1>Sample projects</h1>
      </div>
      <div className="slider-mobile">
        <div className="project-name-mobile">
          <h1>{_nameProject[0]}</h1>
          <p>{_dataSlide[0]}</p>
          <img src={images[0]} />
          <h2>{_dataDescriptionSlide[0]}</h2>
        </div>
        <div className="project-name-mobile">
          <h1>{_nameProject[1]}</h1>
          <p>{_dataSlide[1]}</p>
          <img src={images[1]} />
          <h2>{_dataDescriptionSlide[1]}</h2>
        </div>
        <div className="project-name-mobile">
          <h1>{_nameProject[2]}</h1>
          <p>{_dataSlide[2]}</p>
          <img src={images[2]} />
          <h2>{_dataDescriptionSlide[2]}</h2>
        </div>
        <div className="project-name-mobile">
          <h1>{_nameProject[3]}</h1>
          <p>{_dataSlide[3]}</p>
          <img src={images[3]} />
          <h2>{_dataDescriptionSlide[3]}</h2>
        </div>
      </div>
      <div className="send-form-mobile">
        <h1>Submission form</h1>
        <h2>Enter your details in the field below</h2>
        <form className="form-mobile">
          <input
            className="title-send-mobile"
            placeholder="Enter project subject"
          />
          <textarea
            className="title-body-mobile"
            placeholder="Enter body subject"
          />
          <div>
            <button className="button-send-mobile">Send project data</button>
          </div>
        </form>
      </div>
      {/* <div className="footer-menu-block-mobile">
        <ul>
          <li >Number</li>
          <li >+375(33)12-34-567</li>
          <li >About</li>
          <li >Your privacy</li>
          <li >2021 Web-DEV, INC</li>
        </ul>
      </div> */}
    </div>
  );
};

export default MobileContent;
