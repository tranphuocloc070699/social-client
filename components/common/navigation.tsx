import React from "react";
import Icon from "@/components/common/icon";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
};

const Navigation = ({ className }: Props) => {
  return (
    <div
      component-name="Navigation"
      className={twMerge(`flex items-center gap-1 ${className}`)}
    >
      <span
        className={"font-sans text-base font-normal text-sh-text brightness-75"}
      >
        Trang chủ
      </span>
      <Icon
        name={"chevronRight"}
        size={16}
        className={"text-sh-text brightness-75"}
      />
      <span className={"font-sans text-base font-medium text-sh-primary"}>
        HMX Ziwei
      </span>
    </div>
  );
};

export default Navigation;
