import React from "react";
import { twMerge } from "tailwind-merge";
import Typography from "@/components/common/typography";
import Icon from "@/components/common/icon";

type Props = {
  className?: string;

  title?: string;
  children?: React.ReactNode;
};

const FilterBlock = ({ className, title, children }: Props) => {
  const [isExpand, setIsExpand] = React.useState(true);

  function handleToggleExpand() {
    setIsExpand((prevState) => !prevState);
  }

  return (
    <div
      component-name="FilterBlock"
      className={twMerge(
        `overflow-hidden border-b border-sh-secondary-200 py-4 transition-all duration-300 md:px-0 md:py-6 first:md:pt-0 ${isExpand ? "max-h-[1000px]" : "max-h-16 md:max-h-20"} ${className}`
      )}
    >
      {title && (
        <div className={"flex items-center justify-between"}>
          <Typography.H4 className={"font-normal"}>{title}</Typography.H4>
          <div className={"relative h-6 w-6"} onClick={handleToggleExpand}>
            <Icon
              name={"minus"}
              className={
                "absolute inset-0 z-10 h-full w-full cursor-pointer text-sh-text"
              }
            />
            <Icon
              name={"minus"}
              className={twMerge(
                `absolute inset-0 h-full w-full text-sh-text transition-all duration-300 ${!isExpand && "rotate-90"}`
              )}
            />
          </div>
        </div>
      )}
      <div className={twMerge(title && "mt-4 md:mt-6")}>{children}</div>
    </div>
  );
};

export default FilterBlock;
