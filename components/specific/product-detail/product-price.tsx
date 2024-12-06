import React from "react";
import { twMerge } from "tailwind-merge";
import Icon, { icons } from "@/components/common/icon";
import Typography from "@/components/common/typography";

type Props = {
  className?: string;
  title: string;

  value: string;
};
const ProductPrice = ({ className, title, value }: Props) => {
  return (
    <div
      component-name="ProductPrice"
      className={twMerge(
        ` ${className} first:border-r first:border-sh-secondary-300`
      )}
    >
      <Typography.Label className={"block"}>{title}</Typography.Label>
      <Typography.Text className={"mt-4 block text-4xl font-medium"}>
        {value}
      </Typography.Text>
    </div>
  );
};

export default ProductPrice;
