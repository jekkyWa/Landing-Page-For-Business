import React, { useEffect, useState } from "react";
import "./content-one.css";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";
import AspectRatioIcon from "@material-ui/icons/AspectRatio";
import MinimizeIcon from "@material-ui/icons/Minimize";
import { _arrOne, _arrTwo } from "./data";
import { Animated } from "react-animated-css";

const ContentOne = () => {
  const [dataPrintingOne, setDataPrintingOne] = useState([]);
  const [dataPrintingTwo, setDataPrintingTwo] = useState([]);
  const [styleTypeOne, setStyleTypeOne] = useState(false);
  const [styleTypeTwo, setStyleTypeTwo] = useState(false);
  const [styleTypeThree, setStyleTypeThree] = useState(false);
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
    setTimeout(() => {
      printing(_arrOne, setDataPrintingOne);
    }, 3000);
    setTimeout(() => {
      printing(_arrTwo, setDataPrintingTwo);
    }, 8000);
    setTimeout(() => {
      setStyleTypeOne(true);
    }, 200);
    setTimeout(() => {
      setStyleTypeTwo(true);
    }, 1000);
    setTimeout(() => {
      setStyleTypeThree(true);
    }, 1800);
  }, []);

  const styleOne = styleTypeOne ? "visiable" : "not-visiable";
  const styleTwo = styleTypeTwo ? "visiable" : "not-visiable";
  const styleThree = styleTypeThree ? "visiable" : "not-visiable";

  const newLineTerminal = newLine ? "Web-DEV:~" : "";

  return (
    <div className="content-block-one">
      <h1>
        <Animated
          animationIn="fadeIn"
          animationOut="fadeOut"
          animationInDuration={2000}
          isVisible={true}
          className={styleOne}
        >
          Why pay too much
        </Animated>
        <Animated
          animationIn="fadeIn"
          animationOut="fadeOut"
          animationInDuration={2000}
          isVisible={true}
          className={styleTwo}
        >
          for quality
        </Animated>
        <Animated
          animationIn="fadeIn"
          animationOut="fadeOut"
          animationInDuration={2000}
          isVisible={true}
          className={styleThree}
        >
          when you can use
        </Animated>
        <h1 className="center">
          <Animated
            animationIn="fadeIn"
            animationOut="fadeOut"
            animationInDuration={2000}
            isVisible={true}
            className={styleThree}
          >
            "Web-DEV"{" "}
          </Animated>
        </h1>
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
                <MinimizeIcon className=""/>
                <AspectRatioIcon className="" />
                <CancelPresentationIcon className="cancel-terminal" />
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
