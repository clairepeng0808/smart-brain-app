import React from "react";
import "./ImageLinkForm.css";

const ImageLinkInput = ({ onInputChange, onPictureSubmit }) => {
  return (
    <div className="background">
      <p className="intro">
        {"The Magic Brain will detect faces in your pictures. Give it a try!"}
      </p>
      <div className="link-box shadow1">
        <input
          className="link-input"
          type="link"
          placeholder="Input your image url"
          onChange={onInputChange}
        ></input>
        <button className="btn detect" onClick={onPictureSubmit}>
          Detect
        </button>
      </div>
    </div>
  );
};

export default ImageLinkInput;
