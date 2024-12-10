import React from "react";
import { HeaderItem } from "@/components/common/header/header-menu";
import Link from "next/link";
import Icon from "@/components/common/icon";
import { twMerge } from "tailwind-merge";

const HeaderMenuItem = ({ title, path, icon, isActive }: HeaderItem) => {
  return (
    <>
      <Link
        href={path}
        className={twMerge(
          `hidden font-sans text-xl font-normal text-sh-text brightness-75 md:block ${isActive && "text-sh-primary brightness-125"}`
        )}
      >
        {title}
      </Link>
      <Link
        href={path}
        className={twMerge(
          `flex h-[160px] flex-col items-center justify-center gap-4 rounded-lg bg-sh-secondary-300 font-sans text-xl font-normal text-sh-text brightness-75 md:hidden md:h-full ${isActive && "text-sh-primary brightness-125"}`
        )}
      >
        <Icon
          name={icon}
          className={twMerge(`text-sh-text ${isActive && "text-sh-primary"}`)}
        />
        {title}
      </Link>
    </>
  );
};

export default HeaderMenuItem;
