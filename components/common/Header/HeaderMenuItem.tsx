import React from 'react';
import {HeaderItem} from "@/components/common/Header/HeaderMenu";
import Link from "next/link";
import Icon from "@/components/common/Icon";
import {twMerge} from "tailwind-merge";


const HeaderMenuItem = ({title, path, icon, isActive}: HeaderItem) => {
  return (
      <>
        <Link href={path}
              className={twMerge(`text-sh-primary text-lg font-semibold md:block hidden brightness-75 ${isActive && "text-sh-text brightness-200"}`)}>{title}</Link>
        <Link href={path}
              className={twMerge(`md:h-full h-[160px] md:hidden flex flex-col items-center justify-center gap-4 rounded-lg bg-sh-secondary-300 text-sh-primary ${isActive && "brightness-200"}`)}>
          <Icon name={icon} className={"text-sh-primary"}/>
          {title}
        </Link>
      </>
  );
};

export default HeaderMenuItem;