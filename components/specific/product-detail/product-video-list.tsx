import React from "react";
import { twMerge } from "tailwind-merge";
import ProductVideoItem from "@/components/specific/product-detail/product-video-item";

type Props = {
  className?: string;
};
const ProductVideoList = ({ className }: Props) => {
  return (
    <div
      className={twMerge(
        `grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 2xl:grid-cols-4 ${className}`
      )}
      component-name="ProductVideoList"
    >
      <ProductVideoItem />
      <ProductVideoItem />
      <ProductVideoItem />
      <ProductVideoItem />
    </div>
  );
};

export default ProductVideoList;
