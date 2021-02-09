import React, { useEffect, useState } from "react";
import "./content.css";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";
import AspectRatioIcon from "@material-ui/icons/AspectRatio";
import MinimizeIcon from "@material-ui/icons/Minimize";
import { _arrOne, _arrTwo } from "./data";
import Footer from "../footer";
import Img_1 from "../../image/img_1.png";
import { Animated } from "react-animated-css";

const ContentOne = () => {
  const [dataPrintingOne, setDataPrintingOne] = useState([]);
  const [dataPrintingTwo, setDataPrintingTwo] = useState([]);

  const [newLine, setNewLine] = useState(false);

  const [update, setUpdate] = useState(1);

  // Content One

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

  const selectTwo = (value) => {
    if (value == 2) {
      setTimeout(() => {
        setUpdate(value);
      }, 2000);
    }
  };

  //Content two

  useEffect(() => {
    if (!newLine) {
      setTimeout(() => {
        printing(_arrOne, setDataPrintingOne);
      }, 4000);
    }
    if (newLine) {
      setTimeout(() => {
        printing(_arrTwo, setDataPrintingTwo);
      }, 1000);
    }
  }, [newLine]);

  const newLineTerminal = newLine ? "Web-DEV:~" : "";
  if (update == 2) {
    return (
      <div className="content-block-one container-fluid">
        <div className="row">
          <div className="col-6 contnet-two-body">
            <h1>
              {" "}
              <Animated
                animationIn="fadeInRight"
                animationInDuration={300}
                animationOutDuration={1000}
                isVisible={true}
              >
                Why should you choose me?
              </Animated>
            </h1>
            <p>
              <Animated
                animationIn="fadeInRight"
                animationInDuration={400}
                animationOutDuration={1000}
                isVisible={true}
              >
                Work with projects of any complexity. I don't have a long track
                record. But I always ready to learn
              </Animated>
            </p>
            <h1>
              <Animated
                animationIn="fadeInRight"
                animationInDuration={300}
                animationOutDuration={1000}
                isVisible={true}
              >
                Why shouldn't you choose me
              </Animated>
            </h1>
            <p>
              {" "}
              <Animated
                animationIn="fadeInRight"
                animationInDuration={400}
                animationOutDuration={1000}
                isVisible={true}
              >
                There are no such reasons
              </Animated>
            </p>
          </div>
          <div className="col-6 contnet-two-body-img">
            <img src={Img_1} />
          </div>
        </div>

        <Footer contentTwo={true} />
      </div>
    );
  }
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
      <Footer contentOne={true} selectTwo={selectTwo} />
    </div>
  );
};

export default ContentOne;
