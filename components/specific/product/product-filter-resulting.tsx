import React from "react";
import { twMerge } from "tailwind-merge";
import ProductCategoryList from "@/components/specific/product/product-category-list";
import SwitchItem from "@/components/specific/switch/switch-item";

type Props = {
  className?: string;
};
const ProductFilterResulting = ({ className }: Props) => {
  return (
    <div
      className={twMerge(` ${className}`)}
      component-name="ProductFilterResulting"
    >
      <ProductCategoryList />

      <div
        className={
          "3xl:grid-cols-6 mt-4 grid grid-cols-2 gap-4 md:mt-6 md:grid-cols-4 md:gap-6"
        }
      >
        <SwitchItem loading={false} />
        <SwitchItem loading={false} />
        <SwitchItem loading={false} />
        <SwitchItem loading={false} />
        <SwitchItem loading={false} />
        <SwitchItem loading={false} />
        <SwitchItem loading={false} />
        <SwitchItem loading={false} />
      </div>
    </div>
  );
};

export default ProductFilterResulting;
