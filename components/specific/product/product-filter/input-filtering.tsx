import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
};
const InputFiltering = ({ className }: Props) => {
  return (
    <div
      className={twMerge(` ${className}`)}
      component-name="InputFiltering"
    ></div>
  );
};

export default InputFiltering;
