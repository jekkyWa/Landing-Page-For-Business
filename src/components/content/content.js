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
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import InstagramIcon from "@material-ui/icons/Instagram";
import LocalPizzaIcon from "@material-ui/icons/LocalPizza";
import ListAltIcon from "@material-ui/icons/ListAlt";
import AssignmentIcon from "@material-ui/icons/Assignment";
import Example_1 from "../../image/example_1.png";
import IconButton from "@material-ui/core/IconButton";

const ContentOne = () => {
  const [dataPrintingOne, setDataPrintingOne] = useState([]);
  const [dataPrintingTwo, setDataPrintingTwo] = useState([]);

  const hide = () => {
    document.getElementsByClassName("cursor")[0].style.display = "block";
  };

  const uncovered = () => {
    document.getElementsByClassName("cursor")[0].style.display = "none";
  };

  const [newLine, setNewLine] = useState(false);
  const [animationOutBlock, setAnimationOutBlock] = useState(false);
  const [update, setUpdate] = useState(1);

  const [dataSlide, setDataSlide] = useState([
    "I tried to write an Instagram clone and implement all the main functions of this platform",
    "2",
    "3",
    "4",
  ]);
  const [dataDescriptionSlide, setDataDescriptionSlide] = useState([
    "The project is implemented using the React framework and the back-end is implemented on node.js, mongo",
    "2",
    "3",
    "4",
  ]);

  const [numberSlide, setNumberSlide] = useState(0);

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
    setTimeout(() => {
      setUpdate(value);
    }, 1000);
  };

  const styleOutAnim = animationOutBlock ? "anim-out" : "";

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

        <Footer contentTwo={true} selectTwo={selectTwo} />
      </div>
    );
  }
  //content one
  if (update == 1) {
    return (
      <div className="content-block-one">
        <h1>
          <span className={`one ${styleOutAnim}`}>Why pay too much</span>
          <span className={`two ${styleOutAnim}`}>for quality</span>
          <span className={`three ${styleOutAnim}`}>when you can use</span>
          <span className={`four ${styleOutAnim}`}>"Web-DEV"</span>
        </h1>
        <div className={`terminal ${styleOutAnim}`}>
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
  }

  //content three

  if (update == 3) {
    return (
      <div className="content-block-one container-fluid">
        <div className="row">
          <div className="col-6">
            <div className="sample-project">
              <h1>Sample projects</h1>
            </div>
            <div className="row slider">
              <div className="col-3">
                <IconButton>
                  <NavigateBeforeIcon
                    className="arrow-before"
                    fontSize="large"
                    onClick={() => {
                      numberSlide == 0
                        ? setNumberSlide(3)
                        : setNumberSlide(numberSlide - 1);
                    }}
                  />
                </IconButton>
              </div>
              <div className="col-6 project-name">
                <h1>Instaclone</h1>
              </div>
              <div className="col-3">
                <IconButton>
                  <NavigateNextIcon
                    className="arrow-next"
                    fontSize="large"
                    onClick={() => {
                      numberSlide == 3
                        ? setNumberSlide(0)
                        : setNumberSlide(numberSlide + 1);
                    }}
                  />
                </IconButton>
              </div>
            </div>
            <div className="description">
              <p>{dataSlide[numberSlide]}</p>
            </div>
            <div className="slider-icons">
              <InstagramIcon fontSize="large" className="slider-icon" />
              <LocalPizzaIcon fontSize="large" className="slider-icon" />
              <ListAltIcon fontSize="large" className="slider-icon" />
              <AssignmentIcon fontSize="large" className="slider-icon" />
            </div>
          </div>
          <div className="col-6 img-project">
            <img src={Example_1} />
            <div className="description-img">
              <h2>{dataDescriptionSlide[numberSlide]}</h2>
            </div>
          </div>
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
          <div >
            <input
              className="title-send"
              placeholder="Input Two"
              onMouseOver={() => uncovered()}
              onMouseOut={() => hide()}
            />
          </div>
          <div>
            <input className="title-body" placeholder="Input One" />
          </div>
        </div>
        <Footer contentFour={true} selectTwo={selectTwo} />
      </div>
    );
  }
};

export default ContentOne;
