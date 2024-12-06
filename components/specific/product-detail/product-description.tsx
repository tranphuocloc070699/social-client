import React from "react";
import { twMerge } from "tailwind-merge";
import Typography from "@/components/common/typography";

type Props = {
  className?: string;
};
const ProductDescription = ({ className }: Props) => {
  return (
    <div
      className={twMerge(` ${className}`)}
      component-name="ProductDescription"
    >
      <Typography.H4 className={"text-sh-primary"}>Bạn có biết?</Typography.H4>
      <Typography.Paragraph
        className={"mt-2 rounded-lg bg-sh-secondary-300 p-4 md:px-6"}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
        consectetur cumque dolorem facere, id illum inventore, iste laborum
        magni modi molestiae nobis odit quas quia quibusdam quidem quos vitae
        voluptatem.
      </Typography.Paragraph>
    </div>
  );
};

export default ProductDescription;
