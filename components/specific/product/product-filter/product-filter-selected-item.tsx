import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
};
const ProductFilterSelectedItem = ({ className }: Props) => {
  return (
    <div
      className={twMerge(` ${className}`)}
      component-name="ProductFilterSelectedItem"
    ></div>
  );
};

export default ProductFilterSelectedItem;
