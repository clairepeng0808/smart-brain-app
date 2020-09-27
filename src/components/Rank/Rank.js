import React from "react";
import "./Rank.css";

const Rank = ({ name, entries }) => {
  return (
    <div className="rank">
      <p className="white f2">{`${name} Your current entry is...`}</p>
      <p className="white f1">{`#${entries}`}</p>
    </div>
  );
};

export default Rank;
