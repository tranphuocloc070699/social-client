import React from "react";
import { twMerge } from "tailwind-merge";
import NextImg from "next/image";
import Typography from "@/components/common/typography";

type Props = {
  className?: string;
};
const ProductVideoItem = ({ className }: Props) => {
  return (
    <div
      className={twMerge(
        `flex flex-col gap-4 rounded-lg bg-sh-secondary-300 p-4 md:gap-6 md:p-6 ${className}`
      )}
      component-name="ProductVideoItem"
    >
      <NextImg
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDWgjiBoYN3YDYv33IDo9YuBqyfFJ3mDTHAA&s"
        }
        alt={"Youtube Video"}
        width={200}
        height={200}
        className={"h-[120px] w-full object-cover"}
      />
      <Typography.Paragraph className={"line-clamp-4 text-sh-secondary-100"}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
        rem repellat similique! Accusantium, cupiditate dolore doloremque fuga
        in iusto molestiae neque numquam pariatur praesentium quam quasi
        reiciendis rem voluptate voluptatem?
      </Typography.Paragraph>
    </div>
  );
};

export default ProductVideoItem;
