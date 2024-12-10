import React from "react";
import Typography from "@/components/common/typography";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
};

const ProductBadge = ({ className }: Props) => {
  return (
    <Typography.Label
      className={twMerge(
        `text-nowrap rounded-lg bg-sh-secondary-300 px-4 py-2 text-center text-base font-normal text-sh-primary ${className}`
      )}
    >
      Product Category
    </Typography.Label>
  );
};

export default ProductBadge;
