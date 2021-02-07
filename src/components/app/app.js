import React, { useEffect, useState } from "react";
import ContentOne from "../content-one";
import Footer from "../footer";
import Header from "../header";
import ParticleComponent from "../particles/particles";
import "./app.css";

const App = () => {
  const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 });
  useEffect(() => {
    const moveCursor = (e) => {
      const x = e.clientX - 4;
      const y = e.clientY - 3;
      setCursorXY({ x, y });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div>
      <div
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
          />
          <Header />
          <ContentOne/>
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default App;
