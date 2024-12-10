import React from "react";
import Typography from "@/components/common/typography";
import { twMerge } from "tailwind-merge";
import { className } from "postcss-selector-parser";
import IconCounting from "@/components/common/icon-counting";
import ProductPrice from "@/components/specific/product-detail/product-price";
import ProductPropertyItem from "@/components/specific/product-detail/product-property-item";
import ProductDescription from "@/components/specific/product-detail/product-description";

type Props = {
  className?: string;
};

const ProductInformation = ({ className }: Props) => {
  return (
    <div
      component-name="ProductInformation"
      className={twMerge(`flex flex-col gap-4 md:gap-6 ${className}`)}
    >
      <div className={twMerge(`flex items-center justify-between`)}>
        <Typography.H2 className={"font-normal text-sh-primary"}>
          Placeholder Text
        </Typography.H2>
        <IconCounting count={20} icon={{ name: "emptyHeart" }} />
      </div>
      <div className={"grid grid-cols-2 gap-4 md:gap-6"}>
        <ProductPrice title={"Giá hãng"} value={"0.05"} />
        <ProductPrice title={"Giá thị trường"} value={"8000"} />
      </div>
      <div
        className={
          "grid grid-cols-3 gap-4 md:grid-cols-4 md:gap-6 2xl:grid-cols-5"
        }
      >
        <ProductPropertyItem title={"Lò xo"} value={"48g"} icon={"keyboard"} />
        <ProductPropertyItem title={"Top HS"} value={"PC"} icon={"keyboard"} />
        <ProductPropertyItem
          title={"Bottom HS"}
          value={"POM"}
          icon={"keyboard"}
        />
        <ProductPropertyItem title={"Stem"} value={"Ly"} icon={"keyboard"} />
        <ProductPropertyItem title={"Chân"} value={"5 Pin"} icon={"keyboard"} />
      </div>
      <ProductDescription />
    </div>
  );
};

export default ProductInformation;
