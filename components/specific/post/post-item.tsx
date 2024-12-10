import React from "react";
import { twMerge } from "tailwind-merge";
import NextImg from "next/image";
import Typography from "@/components/common/typography";

type Props = {
  loading: boolean;
  className?: string;
};
const PostItem = ({ loading, className }: Props) => {
  return (
    <div
      component-name="PostItem"
      className={twMerge(`relative h-[240px] w-full ${className}`)}
    >
      <section
        className={twMerge(
          `absolute inset-0 z-10 flex gap-4 rounded-lg bg-sh-secondary-300 p-2 opacity-100 transition-all duration-300 ${loading && "opacity-0"}`
        )}
      >
        <NextImg
          src={
            "https://images.unsplash.com/photo-1530623288743-52a89e908add?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGtleWJvYXJkfGVufDB8fDB8fHww"
          }
          alt={"https://github.com/shadcn.png"}
          quality={100}
          width={400}
          height={400}
          className={"h-full w-full max-w-[50%] rounded-lg object-cover"}
        />
        <span className={"py-6"}>
          <Typography.H4 className={"px-4 text-left"}>
            Cách mod phím với băng keo 3M
          </Typography.H4>
          <Typography.Paragraph
            className={"mt-2 px-4 text-left text-sm text-sh-text"}
          >
            Cách mod để phím có âm thanh hay nhất
          </Typography.Paragraph>
        </span>
      </section>
    </div>
  );
};

export default PostItem;
