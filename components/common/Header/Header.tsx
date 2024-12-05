"use client"

import React from 'react';
import {icons} from "@/components/common/Icon";
import Logo from "@/components/common/Header/HeaderLogo";
import HeaderMenu from "@/components/common/Header/HeaderMenu";
import HeaderUser from "@/components/common/Header/HeaderUser";


const Header = () => {
  return (
      <div component-name="Header"
           className={"container bg-sh-background md:h-20 h-16 grid grid-cols-12"}>
        <Logo className={"col-span-3"}/>
        <HeaderMenu className={"md:col-span-6 col-span-9"}/>
        <HeaderUser className={"md:flex hidden col-span-3 justify-end"}/>
      </div>
  );
};

export default Header;