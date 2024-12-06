import React from "react";
import Typography from "@/components/common/typography";

const ProductCategoryItem = () => {
  return (
    <Typography.Text
      className={
        "rounded-lg bg-sh-secondary-300 px-4 py-2 text-center font-normal text-sh-primary"
      }
    >
      Product Category
    </Typography.Text>
  );
};

export default ProductCategoryItem;
