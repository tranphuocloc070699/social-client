import React from "react";
import { IconProps } from "@/components/common/input/InputForm";
import Icon from "@/components/common/icon";
import Typography from "@/components/common/typography";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
  title: string;
  icon?: IconProps;
  showAllPath?: string;
  showAllElement?: React.ReactNode;
  children: React.ReactNode;
};
const BlockTitle = ({
  className,
  title,
  icon,
  showAllPath,
  showAllElement,
  children,
}: Props) => {
  return (
    <section className={twMerge(`${className}`)}>
      <div
        component-name="BlockTitle"
        className={twMerge(`flex items-center justify-between`)}
      >
        <div className={"flex items-center gap-2"}>
          {icon?.showIcon && (
            <Icon name={icon.name} className={"text-sh-primary"} size={24} />
          )}
          <Typography.H3 className={"text-sh-primary"}>{title}</Typography.H3>
        </div>

        {showAllPath && (
          <Link
            className={
              "flex items-center gap-2 text-nowrap text-base text-sh-text"
            }
            href={showAllPath}
          >
            Xem tất cả
            <Icon name={"moveRight"} className={"text-sh-text"} size={16} />
          </Link>
        )}
        {showAllElement && <div className={"md:hidden"}>{showAllElement}</div>}
      </div>
      <div className={"mt-4"}>{children}</div>
    </section>
  );
};

export default BlockTitle;
