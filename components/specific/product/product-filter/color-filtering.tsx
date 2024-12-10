"use client";
import React, { useEffect, useState } from "react";

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const ColorFiltering = () => {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    // Generate colors only on the client side
    const generatedColors = Array.from({ length: 10 }, () => getRandomColor());
    setColors(generatedColors);
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div
      component-name="ColorFiltering"
      className="grid grid-cols-6 gap-4 md:gap-6"
    >
      {colors.map((color, index) => (
        <div
          key={index}
          className="h-8 w-8 cursor-pointer rounded-lg"
          style={{ backgroundColor: color }}
        ></div>
      ))}
    </div>
  );
};

export default ColorFiltering;
