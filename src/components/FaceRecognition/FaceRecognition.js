import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, facebox }) => {
  return (
    <div className="face-recog-image">
      <div className="image-area">
        <img
          id="inputimage"
          style={{ width: 500 }}
          className="shadow1"
          src={imageUrl}
          alt=""
        ></img>
        <div
          className="facebox"
          style={{
            top: facebox.topRow,
            right: facebox.rightCol,
            bottom: facebox.bottomRow,
            left: facebox.leftCol,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
