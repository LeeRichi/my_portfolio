import "./intro.css";
import Chili from "../../image/chili.glb"
import { useState, useEffect } from 'react';

const Intro = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 900);
      setIsLargeScreen(width >= 1600);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const modelStyle = {
    marginTop: isMobile ? "-10rem" : isLargeScreen ? "20rem" : "15rem",
    width: "100%",
    maxWidth: isLargeScreen ? "600px" : isMobile ? "100%" : "400px",
    height: isLargeScreen ? "500px" : isMobile ? "300px" : "400px",
    zIndex: "1",
    objectFit: "contain",
  };

  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, I am</h2>
          <h1 className="i-name"><i>Chi Lee</i></h1>
          <h2 className="i-title"><i>&lt;FullStack Developer /&gt;</i></h2>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Typescript</div>
              <div className="i-title-item">React</div>
              <div className="i-title-item">Node js</div>
            </div>
          </div>
          <p className="i-desc">base in Helsinki, Finland</p>
        </div>
      </div>
      <div className="i-right">
        <model-viewer
            src={Chili}
            alt="3D avatar"
            auto-rotate
            camera-controls
            style={modelStyle}
            camera-orbit="auto auto 5m"
            min-camera-orbit="auto auto 4m"
            max-camera-orbit="auto auto 6m"
            zoom-sensitivity="0.2"
            max-field-of-view="50deg"
            min-field-of-view="30deg"
        ></model-viewer>
      </div>
    </div>
  );
};

export default Intro;
