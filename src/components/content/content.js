import React, { useEffect, useState } from "react";
import "./content.css";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";
import AspectRatioIcon from "@material-ui/icons/AspectRatio";
import MinimizeIcon from "@material-ui/icons/Minimize";
import {
  _arrOne,
  _arrTwo,
  _dataSlide,
  _dataDescriptionSlide,
  _nameProject,
} from "./data";
import Footer from "../footer";
import Img_1 from "../../image/img_1.png";
import { Animated } from "react-animated-css";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import InstagramIcon from "@material-ui/icons/Instagram";
import LocalPizzaIcon from "@material-ui/icons/LocalPizza";
import ChatIcon from "@material-ui/icons/Chat";
import AssignmentIcon from "@material-ui/icons/Assignment";
import Example_1 from "../../image/example_1.png";
import Example_2 from "../../image/example_2.png";
import Example_3 from "../../image/example_3.png";
import Example_4 from "../../image/example_4.png";
import IconButton from "@material-ui/core/IconButton";
import shortid from "shortid";

const Content = () => {
  const images = [Example_1, Example_2, Example_3, Example_4];

  const hide = () => {
    document.getElementsByClassName("cursor")[0].style.display = "block";
  };

  const uncovered = () => {
    document.getElementsByClassName("cursor")[0].style.display = "none";
  };

  const [update, setUpdate] = useState(1);

  const [numberSlide, setNumberSlide] = useState(0);
  const [direction, setDirection] = useState("next");
  const [timeoutSlider, setTimeoutSlider] = useState(0);
  const [randomId, setRandomId] = useState("");

  // Content Funtion One

  const [reloadAnimation, setReloadAnimation] = useState(false);
  const [newLine, setNewLine] = useState(false);
  const [dataPrintingOne, setDataPrintingOne] = useState([]);
  const [dataPrintingTwo, setDataPrintingTwo] = useState([]);
  const [terminalIntervalId, setTerminalIntervalId] = useState(0);
  const [terminalFirstTimeoutId, setTerminalFirstTimeoutId] = useState("");

  const printing = (arr, func) => {
    let i = 0;
    let max = arr.length;
    let _interval = setInterval(function () {
      setTerminalIntervalId(_interval);
      if (i < max) {
        func(arr.filter((_, index) => index <= i));
        i++;
      } else {
        clearInterval(_interval);
        setNewLine(true);
      }
    }, 70);
  };

  const sliderTimeFunc = (value = numberSlide + 1) => {
    if (update == 3) {
      let i = value;
      setTimeoutSlider(
        setInterval(function () {
          if (i < 4) {
            setNumberSlide(i);
            i++;
          } else {
            setNumberSlide(0);
            i = 1;
          }
        }, 5000)
      );
    } else {
      setNumberSlide(0);
      clearInterval(timeoutSlider);
    }
  };

  const getId = () => {
    setRandomId(shortid.generate());
  };

  const selectTwo = (value, count) => {
    if (count) {
      setNewLine(false);
      setReloadAnimation(reloadAnimation ? false : true);
    }
    setUpdate(value);
    clearTimeout(terminalFirstTimeoutId);
    clearInterval(terminalIntervalId);
    setDataPrintingOne([]);
    setDataPrintingTwo([]);
  };

  useEffect(() => {
    if (!newLine) {
      setTerminalFirstTimeoutId(
        setTimeout(() => {
          printing(_arrOne, setDataPrintingOne);
        }, 2000)
      );
    } else {
      setTimeout(() => {
        printing(_arrTwo, setDataPrintingTwo);
      }, 500);
    }
  }, [newLine, reloadAnimation]);

  useEffect(() => {
    sliderTimeFunc();
  }, [update]);

  //content one

  if (update == 1) {
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
            <h1>{`${dataPrintingTwo.join("")}`}</h1>
          </div>
        </div>
        <Footer contentOne={true} selectTwo={selectTwo} />
      </div>
    );
  }

  //content two

  if (update == 2) {
    return (
      <div className="content-block-one container-fluid">
        <div className="row">
          <div className="col-6 contnet-two-body">
            <h1>
              {" "}
              <Animated
                animationIn="fadeInRight"
                animationInDuration={500}
                animationOutDuration={1000}
                isVisible={true}
              >
                Why should you choose me?
              </Animated>
            </h1>
            <p>
              <Animated
                animationIn="fadeInRight"
                animationInDuration={600}
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
                animationInDuration={500}
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
                animationInDuration={600}
                animationOutDuration={1000}
                isVisible={true}
              >
                There are no such reasons
              </Animated>
            </p>
          </div>
          <div className="col-6 contnet-two-body-img">
            <Animated
              animationIn="fadeInLeft"
              animationInDuration={700}
              animationOutDuration={1000}
              isVisible={true}
            >
              <img className="img-mac" src={Img_1} />
            </Animated>
          </div>
        </div>

        <Footer contentTwo={true} selectTwo={selectTwo} update={update} />
      </div>
    );
  }

  //content three

  if (update == 3) {
    return (
      <div className="content-block-one container-fluid">
        <div className="row">
          <div className="col-6">
            <Animated
              animationIn="fadeInRight"
              animationInDuration={400}
              animationOutDuration={1000}
              isVisible={true}
              className="sample-project"
            >
              <h1>Sample projects</h1>
            </Animated>
            <Animated
              animationIn="fadeInRight"
              animationInDuration={400}
              animationOutDuration={1000}
              isVisible={true}
              className="row slider"
            >
              <div className="col-3">
                <IconButton
                  onClick={() => {
                    setDirection("before");
                    let count = numberSlide - 1;
                    numberSlide == 0
                      ? setNumberSlide(3)
                      : setNumberSlide(count);
                    clearInterval(timeoutSlider);
                    sliderTimeFunc(numberSlide == 0 ? 0 : numberSlide);
                    getId();
                  }}
                >
                  <NavigateBeforeIcon
                    className="arrow-before"
                    fontSize="large"
                  />
                </IconButton>
              </div>
              <div className="col-6 project-name">
                <h1>{_nameProject[numberSlide]}</h1>
              </div>
              <div className="col-3">
                <IconButton
                  onClick={() => {
                    setDirection("next");
                    let count = numberSlide + 1;
                    numberSlide == 3
                      ? setNumberSlide(0)
                      : setNumberSlide(count);
                    clearInterval(timeoutSlider);
                    sliderTimeFunc(numberSlide == 3 ? 1 : numberSlide + 2);
                    getId();
                  }}
                >
                  <NavigateNextIcon className="arrow-next" fontSize="large" />
                </IconButton>
              </div>
            </Animated>
            <Animated
              animationIn="fadeInRight"
              animationInDuration={400}
              animationOutDuration={1000}
              isVisible={true}
              className="description"
            >
              <p
                className={`${
                  numberSlide == 0 || numberSlide == 2
                    ? "oneAnimSlideHidden"
                    : "twoAnimSlideHidden"
                }`}
              >
                {_dataSlide[numberSlide]}
              </p>
            </Animated>
            <Animated
              animationIn="fadeInRight"
              animationInDuration={400}
              animationOutDuration={1000}
              isVisible={true}
              className="slider-icons"
            >
              <InstagramIcon
                fontSize="large"
                className={`slider-icon ${
                  numberSlide == 0 ? "active-icon" : ""
                }`}
                onClick={() => {
                  setDirection("next");
                  setNumberSlide(0);
                  clearInterval(timeoutSlider);
                  sliderTimeFunc(1);
                  getId();
                }}
              />
              <LocalPizzaIcon
                fontSize="large"
                className={`slider-icon ${
                  numberSlide == 1 ? "active-icon" : ""
                }`}
                onClick={() => {
                  setDirection("next");
                  setNumberSlide(1);
                  clearInterval(timeoutSlider);
                  sliderTimeFunc(2);
                  getId();
                }}
              />
              <ChatIcon
                fontSize="large"
                className={`slider-icon ${
                  numberSlide == 2 ? "active-icon" : ""
                }`}
                onClick={() => {
                  setDirection("next");
                  setNumberSlide(2);
                  clearInterval(timeoutSlider);
                  sliderTimeFunc(3);
                  getId();
                }}
              />
              <AssignmentIcon
                fontSize="large"
                className={`slider-icon ${
                  numberSlide == 3 ? "active-icon" : ""
                }`}
                onClick={() => {
                  setDirection("next");
                  setNumberSlide(3);
                  clearInterval(timeoutSlider);
                  sliderTimeFunc(0);
                  getId();
                }}
              />
            </Animated>
            <div key={randomId} className="progress">
              <div></div>
            </div>
          </div>
          <Animated
            animationIn="fadeInLeft"
            animationInDuration={400}
            animationOutDuration={1000}
            isVisible={true}
            className="col-6 img-project"
          >
            <img
              className={`${
                numberSlide == 0 && direction == "next"
                  ? "active-description-right"
                  : numberSlide == 0 && direction == "before"
                  ? "active-description-left"
                  : ""
              }`}
              src={images[0]}
            />
            <img
              className={`${
                numberSlide == 1 && direction == "next"
                  ? "active-description-right"
                  : numberSlide == 1 && direction == "before"
                  ? "active-description-left"
                  : ""
              }`}
              src={images[1]}
            />
            <img
              className={`${
                numberSlide == 2 && direction == "next"
                  ? "active-description-right"
                  : numberSlide == 2 && direction == "before"
                  ? "active-description-left"
                  : ""
              }`}
              src={images[2]}
            />
            <img
              className={`${
                numberSlide == 3 && direction == "next"
                  ? "active-description-right"
                  : numberSlide == 3 && direction == "before"
                  ? "active-description-left"
                  : ""
              }`}
              src={images[3]}
            />
            <div className="description-img">
              <h2
                className={`hidden-description ${
                  numberSlide == 0 && direction == "next"
                    ? "active-description-right"
                    : numberSlide == 0 && direction == "before"
                    ? "active-description-left"
                    : ""
                }`}
              >
                {_dataDescriptionSlide[0]}
              </h2>
              <h2
                className={`hidden-description ${
                  numberSlide == 1 && direction == "next"
                    ? "active-description-right"
                    : numberSlide == 1 && direction == "before"
                    ? "active-description-left"
                    : ""
                }`}
              >
                {_dataDescriptionSlide[1]}
              </h2>
              <h2
                className={`hidden-description ${
                  numberSlide == 2 && direction == "next"
                    ? "active-description-right"
                    : numberSlide == 2 && direction == "before"
                    ? "active-description-left"
                    : ""
                }`}
              >
                {_dataDescriptionSlide[2]}
              </h2>
              <h2
                className={`hidden-description ${
                  numberSlide == 3 && direction == "next"
                    ? "active-description-right"
                    : numberSlide == 3 && direction == "before"
                    ? "active-description-left"
                    : ""
                }`}
              >
                {_dataDescriptionSlide[3]}
              </h2>
            </div>
          </Animated>
        </div>
        <Footer contentThree={true} selectTwo={selectTwo} />
      </div>
    );
  }

  //content four

  if (update == 4) {
    return (
      <div className="container-fluid">
        <div className="send-request">
          <h1>Enter your details in the field below</h1>
          <div>
            <input
              className="title-send"
              placeholder="Enter project subject"
              onMouseOver={() => uncovered()}
              onMouseOut={() => hide()}
            />
          </div>
          <div>
            <textarea
              className="title-body"
              placeholder="Enter project description"
              onMouseOver={() => uncovered()}
              onMouseOut={() => hide()}
            />
          </div>
          <button
            className="button-send"
            onMouseOver={() => uncovered()}
            onMouseOut={() => hide()}
          >
            Send project data
          </button>
        </div>
        <Footer contentFour={true} selectTwo={selectTwo} />
      </div>
    );
  }
};

export default Content;
