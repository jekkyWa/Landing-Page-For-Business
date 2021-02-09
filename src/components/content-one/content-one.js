import React, { useEffect, useState } from "react";
import "./content-one.css";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";
import AspectRatioIcon from "@material-ui/icons/AspectRatio";
import MinimizeIcon from "@material-ui/icons/Minimize";
import { _arrOne, _arrTwo } from "./data";

const ContentOne = () => {
  const [dataPrintingOne, setDataPrintingOne] = useState([]);
  const [dataPrintingTwo, setDataPrintingTwo] = useState([]);

  const [newLine, setNewLine] = useState(false);

  const printing = (arr, func) => {
    let i = 0;
    let max = arr.length;
    let _interval = setInterval(function () {
      if (i < max) {
        func(arr.filter((_, index) => index <= i));
        i++;
      } else {
        clearInterval(_interval);
        setTimeout(() => {
          setNewLine(true);
        }, 1000);
      }
    }, 100);
  };

  useEffect(() => {
    if (!newLine) {
      setTimeout(() => {
        printing(_arrOne, setDataPrintingOne);
      }, 3000);
    }
    if (newLine) {
      setTimeout(() => {
        printing(_arrTwo, setDataPrintingTwo);
      }, 1000);
    }
  }, [newLine]);

  const newLineTerminal = newLine ? "Web-DEV:~" : "";

  return (
    <div className="content-block-one">
      <h1>
        <span className="one">Why pay too much</span>
        <span className="two">for quality</span>
        <span className="three">when you can use</span>
        <span className="four">"Web-DEV"</span>
      </h1>
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
          <h1>Web-DEV:~ {dataPrintingOne.join("")} </h1>
          <h1>{`${newLineTerminal} ${dataPrintingTwo.join("")}`}</h1>
        </div>
      </div>
    </div>
  );
};

export default ContentOne;
