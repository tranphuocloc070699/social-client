"use client";

import React from "react";
import CommonInput from "./Input";
import Link from "next/link";
import UserService from "@/services/modules/user.service";
import {ISignUpLoginForm} from "@/types/user/user.interface";
import {useToast} from "@/hooks/use-toast";
import {useUserStore} from "@/store/user.store";
import {Button} from "@/components/ui/button";
import NextImg from 'next/image'
import useCustomState from "@/hooks/use-state";
import Typography from "@/components/common/Typography";

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
    password_confirmation: ""
  })


  async function onSubmit() {
    const userService = new UserService();

    let response;
    if (type === "signup") {
      response = await userService.signup(fields);
    }
    if (type === "login") {
      response = await userService.login(fields);
    }
    console.log({response})
    if (response?.success) {
      toast({variant: "default", title: "Đăng ký thành công"})
    } else {
      toast({
        variant: "destructive",
        title: "Có lỗi xảy ra",
      })
    }

    // if (response?.status === 200) {
    //   userStore.setAccessToken(response.data.accessToken);
    //   userStore.setUser(response.data.data);
    //   window.location.href = "/";
    // } else {
    //   toast.toast({
    //     title: response?.errors,
    //     variant: "destructive",
    //   });
    // }
  }

  return (
      <div>

      </div>
  );
};

export default AuthContainer;
