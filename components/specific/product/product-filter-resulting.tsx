import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
};
const ProductFilterResulting = ({ className }: Props) => {
  return (
    <div
      className={twMerge(` ${className}`)}
      component-name="ProductFilterResulting"
    ></div>
  );
};

export default ProductFilterResulting;
