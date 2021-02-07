import React from "react";
import "./content-one.css";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";
import AspectRatioIcon from "@material-ui/icons/AspectRatio";
import MinimizeIcon from "@material-ui/icons/Minimize";

const ContentOne = () => {
  return (
    <div className="content-block-one">
      <h1>Why pay too much for quality when you can use "Web-DEV"</h1>
      <div className="terminal">
        <div className="container-fluid header-terminal">
          <div className="row">
            <div className="col-8 way">
              <h1>
                <IndeterminateCheckBoxIcon className="icon-terminal" />
                Web-DEV:\Creating_your_Project
              </h1>
            </div>
            <div className="col-4 ">
                <div className="panel-icon">
              <MinimizeIcon />
              <AspectRatioIcon />
              <CancelPresentationIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentOne;
