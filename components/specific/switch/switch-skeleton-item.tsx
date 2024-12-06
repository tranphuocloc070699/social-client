import React from "react";
import NextImg from "next/image";
import Typography from "@/components/common/typography";

const SwitchSkeletonItem = () => {
  return (
    <div
      className={"flex h-full w-full animate-pulse flex-col gap-6 rounded-lg"}
    >
      <div className="h-[186px] w-full rounded-lg bg-slate-200"></div>
      <div className="h-7 rounded-lg bg-slate-200"></div>
    </div>
  );
};

export default SwitchSkeletonItem;
