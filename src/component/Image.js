import React from "react";
// import { Pixel } from "./Pixel";

export const Image = (props) => {
  const colors = props.colors;

  //creating unique pixels with discrete rgb colors
  const imgPixel = colors.map((rgb) =>
    rgb.map((color, index) => (
      <div
        key={index}
        className="box"
        style={{
          backgroundColor: `rgb(${color[1]}, ${color[0]}, ${color[2]})`,
        }}
      ></div>
    ))
  );

  return <div className="component">{imgPixel}</div>;
};
