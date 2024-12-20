"use client";

import React, { useRef } from "react";
import { twMerge } from "tailwind-merge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/common/icon";
import Link from "next/link";
import Typography from "@/components/common/typography";
import HeaderSearch from "@/components/common/header/header-search";
import { useUserStore } from "@/store/user.store";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

type Props = {
  className?: string;
};

const HeaderUser = ({ className }: Props) => {
  const { user, isAuthenticated, logout } = useUserStore();
  const { toast } = useToast();
  const path = useRef({
    auth: "/dang-nhap",
  });

  function handleLogout() {
    logout();
    toast({ description: "Đăng xuất thành công" });
  }

  return (
    <div className={twMerge(`flex items-center gap-6 ${className}`)}>
      {isAuthenticated ? (
        <section
          className={"flex w-full items-center justify-between md:justify-end"}
        >
          <div className="group relative flex items-center gap-2">
            <div className="relative">
              <Avatar className="relative border border-sh-text">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>User</AvatarFallback>
              </Avatar>
              <Icon
                name="chevronDown"
                size={12}
                className="absolute bottom-[-2px] right-[-2px] h-4 w-4 rounded-full border border-sh-text bg-sh-secondary-300 p-[2px] text-sh-text"
              />
            </div>
            <Typography.Label className="text-white">
              {user?.full_name}
            </Typography.Label>

            <div className="absolute left-0 top-[120%] z-50 h-0 overflow-hidden rounded-lg bg-sh-secondary-300 shadow-xl transition-all duration-300 group-hover:h-full">
              <Button
                className="bg-sh-secondary-300 text-red-500 hover:bg-white"
                onClick={handleLogout}
              >
                Đăng xuất
              </Button>
            </div>
          </div>
          <Link
            href={"/"}
            className={"flex items-center gap-2 text-sh-primary md:hidden"}
          >
            Đến trang cá nhân
            <Icon name={"moveRight"} className={"text-sh-primary"} />
          </Link>
        </section>
      ) : (
        <section className={"flex items-center gap-6"}>
          <HeaderSearch className={"hidden md:block"} />
          <Link href={path.current.auth}>
            <Icon name={"user"} size={32} className={"text-sh-primary"} />
          </Link>
        </section>
      )}
    </div>
  );
};

export default HeaderUser;
