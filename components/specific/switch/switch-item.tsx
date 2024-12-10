import React from "react";
import NextImg from "next/image";
import Typography from "@/components/common/typography";
import { twMerge } from "tailwind-merge";
import SwitchSkeletonItem from "@/components/specific/switch/switch-skeleton-item";

type Props = {
  loading: boolean;
};

const SwitchItem = ({ loading }: Props) => {
  return (
    <div className={"relative h-[260px] w-full md:h-[260px]"}>
      <section
        className={twMerge(
          `absolute inset-0 z-10 flex flex-col gap-6 rounded-lg bg-sh-secondary-300 opacity-100 transition-all duration-300 ${loading && "opacity-0"}`
        )}
      >
        <NextImg
          src={
            "https://bizweb.dktcdn.net/thumb/1024x1024/100/438/322/products/1-720440ac-5f44-4bd2-9a98-3df5d3-1704356566422.jpg?v=1705392410397"
          }
          alt={"https://github.com/shadcn.png"}
          quality={100}
          width={400}
          height={400}
          className={"h-[186px] w-full rounded-t-lg object-cover"}
        />
        <Typography.H4 className={"px-4 text-center font-normal"}>
          Switch
        </Typography.H4>
      </section>
      <section
        className={twMerge(
          `absolute inset-0 opacity-0 transition-all duration-300 ${loading && "opacity-100"}`
        )}
      >
        <SwitchSkeletonItem />
      </section>
    </div>
  );
};

export default SwitchItem;
