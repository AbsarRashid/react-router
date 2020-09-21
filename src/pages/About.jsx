import React from "react";
import Rainbow from "../hoc/Rainbow";

const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>Some Text To Show in about page</p>
    </div>
  );
};
export default Rainbow(About);
