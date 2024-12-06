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
      <span className={"font-sans text-base font-normal text-sh-primary"}>
        Trang chủ
      </span>
      <Icon name={"chevronRight"} size={16} className={"text-sh-text"} />
      <span className={"font-sans text-base font-semibold text-sh-text"}>
        HMX Ziwei
      </span>
    </div>
  );
};

export default Navigation;