import React, { useEffect, useState } from "react";
import Content from "../content";
import MobileContent from "../content/mobile-content";
import Header from "../header";
import ParticleComponent from "../particles/particles";
import "./app.css";

const App = () => {
  const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 });
  const [a,setA] =useState()
  useEffect(() => {
    const moveCursor = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      setCursorXY({ x, y });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  const desktop = window.screen.width > 770 ? <Content/> : <MobileContent/>


  return (
    <div>
      {/* <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <ParticleComponent />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <div
            className="cursor"
            style={{
              transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)`,
            }}
          /> */}
          <Header />
          {desktop}   
        </div>
    //   </div>
    // </div>
  );
};

export default App;
