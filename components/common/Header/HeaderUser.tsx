import React from "react";
import Button from "@/components/common/Button";
import { twMerge } from "tailwind-merge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/common/Icon";
import Link from "next/link";
import Typography from "@/components/common/Typography";
import HeaderSearch from "@/components/common/Header/HeaderSearch";

type Props = {
  className?: string;
};
const HeaderUser = ({ className }: Props) => {
  return (
    <div className={twMerge(`flex items-center gap-6 ${className}`)}>
      {/*<section className={"flex items-center justify-between w-full"}>*/}
      {/*  <div className={"flex items-center gap-2"}>*/}
      {/*    <div className={"relative"}>*/}
      {/*      <Avatar className={"border border-sh-text relative"}>*/}
      {/*        <AvatarImage src="https://github.com/shadcn.png"/>*/}
      {/*        <AvatarFallback>CN</AvatarFallback>*/}
      {/*      </Avatar>*/}
      {/*      <Icon name={"chevronDown"} size={12}*/}
      {/*            className={"absolute rounded-full bg-sh-secondary-300 text-sh-text w-4 h-4 p-[2px] border border-sh-text right-[-2px] bottom-[-2px]"}/>*/}
      {/*    </div>*/}
      {/*    <Typography.Label className={"text-white"}>Trần Phước Lộc</Typography.Label>*/}
      {/*  </div>*/}
      {/*  <Link href={"/"} className={"flex items-center gap-2 text-sh-primary"}>Đến trang cá nhân*/}
      {/*    <Icon name={"moveRight"} className={"text-sh-primary"}/>*/}
      {/*  </Link>*/}
      {/*</section>*/}

      <section className={"flex items-center gap-6"}>
        <HeaderSearch />
        <Icon name={"user"} size={32} className={"text-sh-primary"} />
        {/*<Button asLink={"/dang-ky"} variant={"primary"}*/}
        {/*        className={"bg-sh-secondary-300 border border-sh-secondary-100 text-sh-text w-[112px]"}>Đăng*/}
        {/*  ký</Button>*/}
        {/*<Button asLink={"/dang-nhap"} variant={"primary"} className={"w-[112px]"}>Đăng*/}
        {/*  nhập</Button>*/}
      </section>
    </div>
  );
};

export default HeaderUser;
