"use client";

import React from "react";
import CommonInput from "./Input";
import Link from "next/link";
import UserService from "@/services/modules/user.service";
import {ISignUpLoginForm} from "@/types/user/user.interface";
import {useToast} from "@/hooks/use-toast";
import {useUserStore} from "@/store/user.store";
import {Button} from "@/components/ui/button";
import NextImg from 'next/image';
import useCustomState from "@/hooks/use-state";
import Typography from "@/components/common/Typography";
import background from "@/public/assets/images/login-background.png";
import logo from "@/public/assets/images/Logo.svg"
import Input from "./Input";

interface Props {
  type: "login" | "signup";
}

const AuthContainer = ({type}: Props) => {
  const {toast} = useToast();
  const userStore = useUserStore();
  const data = {
    login: {
      title: "Đăng nhập",
      switchTitle: "Chưa có tài khoản?",
      switchBtnLabel: "Đăng ký",
      switchLink: "/dang-ky",
    },
    signup: {
      title: "Đăng ký",
      switchTitle: "Đã có tài khoản?",
      switchBtnLabel: "Đăng nhập",
      switchLink: "/dang-nhap",
    },
  };

  const {fields, updateFields} = useCustomState<ISignUpLoginForm>({
    email: "",
    full_name: "",
    password: "",
    password_confirmation: "",
  });

  async function onSubmit() {
    const userService = new UserService();

    let response;
    if (type === "signup") {
      response = await userService.signup(fields);
    }
    if (type === "login") {
      response = await userService.login(fields);
    }
    console.log({response});
    if (response?.success) {
      toast({variant: "default", title: "Đăng ký thành công"});
    } else {
      toast({
        variant: "destructive",
        title: "Có lỗi xảy ra",
      });
    }
  }

  return (
      <div
          className="relative w-full min-h-screen flex justify-center items-center p-5 md:bg-sh-background bg-sh-secondary-300">
        {/* Background image using NextImg */}

        <NextImg
            className="absolute inset-0 object-cover w-full h-full md:block hidden"
            src={background}
            quality={100}
            alt="background"
            layout="fill"
        />
        <NextImg
            className="absolute md:left-[40px] md:top-6 left-4 top-4 object-cover md:w-[180px] w-[100px] h-auto"
            src={logo}
            quality={100}
            alt="logo"
            width={180}
            height={45}
        />

        {/* Content */}
        <div
            className="absolute left-[50%] translate-y-[-50%] top-[50%] translate-x-[-50%] z-10 bg-sh-secondary-300 rounded-lg md:p-6 p-4 flex flex-col items-center justify-center ">
          <Typography.H2>{data[type].title}</Typography.H2>
          <Input placeholder={"Nhập email"} label={"Email"}/>
        </div>
      </div>

  );
};

export default AuthContainer;
