import React, {useState} from 'react';
import Icon, {icons} from "@/components/common/Icon";
import Link from "next/link";
import {twMerge} from "tailwind-merge";
import {usePathname} from "next/navigation";
import HeaderMenuItem from "@/components/common/Header/HeaderMenuItem";
import Button from "@/components/common/Button";
import HeaderUser from "@/components/common/Header/HeaderUser";

export type HeaderItem = {
  title: string;
  path: string;
  icon: keyof typeof icons;
  isActive: boolean;
}

type Props = {
  className?: string;
}


const HeaderMenu = ({className}: Props) => {
  const pathName = usePathname();

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function openMenu() {
    setIsOpenMenu(true)
  }

  function closeMenu() {
    setIsOpenMenu(false)
  }

  const items: HeaderItem[] = [{
    title: "Trang chủ",
    path: "/",
    icon: "house",
    isActive: false,
  }, {
    title: "Bàn phím",
    path: "/keyboard",
    icon: "keyboard",
    isActive: false,
  }, {
    title: "Switch",
    path: "/switch",
    icon: "keyboard",
    isActive: false,
  }, {
    title: "Keycap",
    path: "/key-cap",
    icon: "keyboard",
    isActive: false,
  }]

  return (
      <div component-name="HeaderMenu"
           className={`flex items-center md:justify-center justify-end  ${className}`}>
        <section className={"hidden md:flex items-center justify-center w-full"}>
          <div className={"flex item-center gap-6"}>
            {
              items?.map((item: HeaderItem) => (
                  <HeaderMenuItem isActive={pathName === item.path} key={item.path}
                                  title={item.title} path={item.path}
                                  icon={item.icon}/>))
            }
          </div>
        </section>

        <section className={"md:hidden"}>
          <div className={"relative w-8 h-8 "}>
            <Icon name={"xMark"} size={32}
                  className={twMerge(`absolute inset-0   text-sh-primary cursor-pointer  transition-all duration-300 ${isOpenMenu ? "opacity-100 z-10" : "opacity-0 z-0"}`)}
                  onClick={closeMenu}/>
            <Icon name={"menu"} size={32}
                  className={twMerge(`absolute inset-0  text-sh-primary cursor-pointer  transition-all duration-300 ${isOpenMenu ? "opacity-0 z-0" : "opacity-100 z-10"}`)}
                  onClick={openMenu}/>
          </div>
          <div
              className={twMerge(`md:block md:top-0  transition-all duration-300 h-full right-[-768px] w-full  bg-sh-background fixed top-[64px] border-t-[3px]  border-t-sh-primary ${isOpenMenu && "right-0"}`)}>
            <HeaderUser className={"justify-between border-b border-sh-primary p-4 "}/>
            <div
                className={"md:flex md:items-center md:justify-between grid grid-cols-2 gap-4 px-4 mt-4"}>
              {
                items?.map((item: HeaderItem) => (
                    <HeaderMenuItem isActive={pathName === item.path} key={item.path}
                                    title={item.title} path={item.path}
                                    icon={item.icon}/>))
              }
            </div>
          </div>
        </section>

      </div>
  );
};

export default HeaderMenu;