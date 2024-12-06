"use client";

import React from "react";
import { icons } from "@/components/common/icon";
import Logo from "@/components/common/header/header-logo";
import HeaderMenu from "@/components/common/header/header-menu";
import HeaderUser from "@/components/common/header/header-user";

const Header = () => {
  return (
    <div
      component-name="Header"
      className={"grid h-16 grid-cols-12 bg-sh-background px-4 md:h-20 md:px-6"}
    >
      <Logo className={"col-span-3"} />
      <HeaderMenu className={"col-span-9 md:col-span-6"} />
      <HeaderUser className={"col-span-3 hidden justify-end md:flex"} />
    </div>
  );
};

export default Header;
