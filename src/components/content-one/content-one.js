import React, { useEffect, useState } from "react";
import "./content-one.css";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";
import AspectRatioIcon from "@material-ui/icons/AspectRatio";
import MinimizeIcon from "@material-ui/icons/Minimize";

const ContentOne = () => {
  const _arr = [
    "C",
    "r",
    "e",
    "a",
    "t",
    "e",
    " ",
    "q",
    "u",
    "a",
    "l",
    "l",
    "i",
    "t",
    "y",
    " ",
    "p",
    "r",
    "o",
    "j",
    "e",
    "c",
    "t",
  ];

  const [data, setData] = useState([]);

  const add = () => {
    let i = 0;
    let max = _arr.length;
    let _interval = setInterval(function () {
      if (i < max) {
        setData(_arr.filter((_, index) => index <= i));
        i++;
      } else {
        clearInterval(_interval);
      }
    }, 100);
  };

  useEffect(() => {
    setTimeout(() => {
      add();
    }, 2000);
  }, []);

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
        <div className="body-terminal">
          <h1>Web-DEV:\~ {data.join("")} </h1>
        </div>
      </div>
    </div>
  );
};

export default ContentOne;
