import React, { useEffect, useState } from "react";
import Content from "../content";
import MobileContent from "../content/mobile-content";
import Header from "../header";
import ParticleComponent from "../particles/particles";
import "./app.css";

const App = () => {
  const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 });
  const [a, setA] = useState();
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

  return (
    <div>
      <div>
        <div className="page">
          <div className="particle-effect">
            <ParticleComponent />
          </div>
          <div className="page">
            <div
              className="cursor"
              style={{
                transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)`,
              }}
            />
            <Header />
            <div className="content-page">
            <Content />
            </div>
            <div className="page-mobile">
            <MobileContent />
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default App;
