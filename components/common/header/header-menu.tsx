"use client";
import React, { useState } from "react";
import Icon, { icons } from "@/components/common/icon";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";
import HeaderMenuItem from "@/components/common/header/header-menu-item";
import Button from "@/components/common/button";
import HeaderUser from "@/components/common/header/header-user";
import HeaderSearch from "@/components/common/header/header-search";

export type HeaderItem = {
  title: string;
  path: string;
  icon: keyof typeof icons;
  isActive: boolean;
};

type Props = {
  className?: string;
};

const HeaderMenu = ({ className }: Props) => {
  const pathName = usePathname();

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function openMenu() {
    setIsOpenMenu(true);
  }

  function closeMenu() {
    setIsOpenMenu(false);
  }

  const items: HeaderItem[] = [
    {
      title: "Trang chủ",
      path: "/",
      icon: "house",
      isActive: false,
    },
    {
      title: "Bàn phím",
      path: "/keyboard",
      icon: "keyboard",
      isActive: false,
    },
    {
      title: "switch",
      path: "/switch",
      icon: "keyboard",
      isActive: false,
    },
    {
      title: "Keycap",
      path: "/key-cap",
      icon: "keyboard",
      isActive: false,
    },
  ];

  return (
    <div
      component-name="HeaderMenu"
      className={`flex items-center justify-end md:justify-center ${className}`}
    >
      <section className={"hidden w-full items-center justify-center md:flex"}>
        <div className={"item-center flex gap-6"}>
          {items?.map((item: HeaderItem) => (
            <HeaderMenuItem
              isActive={pathName === item.path}
              key={item.path}
              title={item.title}
              path={item.path}
              icon={item.icon}
            />
          ))}
        </div>
      </section>

      <section className={"md:hidden"}>
        <div className={"flex items-center gap-5"}>
          <HeaderSearch />
          <div className={"relative h-8 w-8"}>
            <Icon
              name={"xMark"}
              size={32}
              className={twMerge(
                `absolute inset-0 cursor-pointer text-sh-primary transition-all duration-300 ${isOpenMenu ? "z-10 opacity-100" : "z-0 opacity-0"}`
              )}
              onClick={closeMenu}
            />
            <Icon
              name={"menu"}
              size={32}
              className={twMerge(
                `absolute inset-0 cursor-pointer text-sh-primary transition-all duration-300 ${isOpenMenu ? "z-0 opacity-0" : "z-10 opacity-100"}`
              )}
              onClick={openMenu}
            />
          </div>
        </div>
        <div
          className={twMerge(
            `fixed right-[-768px] top-[64px] z-40 h-full w-0 border-t-[3px] border-t-sh-primary bg-sh-background transition-all duration-300 md:top-0 md:block ${isOpenMenu && "right-0 w-full"}`
          )}
        >
          <HeaderUser
            className={"justify-between border-b border-sh-primary p-4"}
          />
          <div
            className={
              "mt-4 grid grid-cols-2 gap-4 px-4 md:flex md:items-center md:justify-between"
            }
          >
            {items?.map((item: HeaderItem) => (
              <HeaderMenuItem
                isActive={pathName === item.path}
                key={item.path}
                title={item.title}
                path={item.path}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeaderMenu;
