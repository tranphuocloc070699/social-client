import React from "react";
import { twMerge } from "tailwind-merge";
import Icon, { icons } from "@/components/common/icon";
import Typography from "@/components/common/typography";

type Props = {
  className?: string;
  title: string;
  value: string | number;
  icon: keyof typeof icons | string;
};
const ProductPropertyItem = ({ className, title, value, icon }: Props) => {
  return (
    <div
      component-name="ProductPropertyItem"
      className={twMerge(
        `relative min-h-[80px] rounded-lg bg-sh-secondary-300 p-2 ${className}`
      )}
    >
      <div className={"flex items-center gap-2"}>
        <Icon name={icon} className={"text-sh-secondary-100"} />
        <Typography.Label className={"block text-sh-secondary-100"}>
          {title}
        </Typography.Label>
      </div>
      <Typography.Text
        className={"absolute inset-0 mt-6 pt-4 text-center text-xl font-medium"}
      >
        {value}
      </Typography.Text>
    </div>
  );
};

export default ProductPropertyItem;
