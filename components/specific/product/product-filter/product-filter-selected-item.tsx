import React from "react";
import { twMerge } from "tailwind-merge";
import Icon from "@/components/common/icon";

type Props = {
  className?: string;
};
const ProductFilterSelectedItem = ({ className }: Props) => {
  return (
    <div
      className={twMerge(
        `flex items-center gap-4 text-nowrap rounded-lg bg-sh-secondary-300 px-4 py-2 text-sh-text ${className}`
      )}
      component-name="ProductFilterSelectedItem"
    >
      Selected 1
      <Icon
        name={"xMark"}
        className={"h-full w-full cursor-pointer text-red-500"}
        size={16}
      />
    </div>
  );
};

export default ProductFilterSelectedItem;
