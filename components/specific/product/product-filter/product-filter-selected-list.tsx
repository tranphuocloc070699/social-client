import React from "react";
import { twMerge } from "tailwind-merge";
import ProductFilterSelectedItem from "@/components/specific/product/product-filter/product-filter-selected-item";

type Props = {
  className?: string;
};

const ProductFilterSelectedList = ({ className }: Props) => {
  return (
    <div
      component-name="ProductFilterSelectedList"
      className={twMerge(`flex flex-wrap items-center gap-4 ${className}`)}
    >
      <ProductFilterSelectedItem />
      <ProductFilterSelectedItem />
      <ProductFilterSelectedItem />
      <ProductFilterSelectedItem />
      <ProductFilterSelectedItem />
    </div>
  );
};

export default ProductFilterSelectedList;
