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
import mobileBackgroundTop from "@/public/assets/images/mobile-bg-top.svg";
import mobileBackgroundBottom from "@/public/assets/images/mobile-bg-bot.svg";
import logo from "@/public/assets/images/Logo.svg"
import Input from "./Input";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {FieldValues, useForm} from "react-hook-form";

interface Props {
  type: "login" | "signup";
}

const schema = yup.object({
  email: yup
  .string()
  .email("Email không hợp lệ")
  .required("Email là bắt buộc"),
  password: yup
  .string()
  .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
  .required("Mật khẩu là bắt buộc"),
  full_name: yup
  .string()
  .required("Tên đầy đủ là bắt buộc"),
  password_confirmation: yup
  .string()
  .oneOf([yup.ref('password')], "Mật khẩu xác nhận không khớp")
  .required("Mật khẩu xác nhận là bắt buộc")
});

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


  const {control, handleSubmit} = useForm({
    defaultValues: {
      email: '',
    },
  });

  const {fields, updateFields} = useCustomState<ISignUpLoginForm>({
    email: "",
    full_name: "",
    password: "",
    password_confirmation: "",
  });

  // async function onSubmit() {
  //   const userService = new UserService();
  //
  //   let response;
  //   if (type === "signup") {
  //     response = await userService.signup(fields);
  //   }
  //   if (type === "login") {
  //     response = await userService.login(fields);
  //   }
  //   console.log({response});
  //   if (response?.success) {
  //     toast({variant: "default", title: "Đăng ký thành công"});
  //   } else {
  //     toast({
  //       variant: "destructive",
  //       title: "Có lỗi xảy ra",
  //     });
  //   }
  // }

  // function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  //   e.preventDefault()
  //   console.log({e, fields})
  // }

  function onSubmit(data: any) {
    console.log({data})
  }

  return (
      <form
          onSubmit={handleSubmit(data => onSubmit(data))}
          className="relative w-full min-h-screen flex justify-center items-center p-5 md:bg-sh-background bg-sh-secondary-300">
        <NextImg
            className="absolute inset-0 object-cover w-full h-full md:block hidden"
            src={background}
            quality={100}
            alt="background"
            layout="fill"
        />
        <NextImg
            className="absolute top-0 right-0 md:hidden"
            src={mobileBackgroundTop}
            quality={100}
            alt="mobile background top"
            width={180}
            height={45}
        />
        <NextImg
            className="absolute bottom-0 left-0 md:hidden"
            src={mobileBackgroundBottom}
            quality={100}
            alt="mobile background bot"
            width={180}
            height={45}
        />
        <NextImg
            className="absolute md:left-[40px] md:top-6 left-4 top-4 object-cover md:w-[180px] w-[100px] h-auto"
            src={logo}
            quality={100}
            alt="logo"
            width={180}
            height={45}
        />


        <div
            className="absolute left-[50%] translate-y-[-50%] top-[50%] translate-x-[-50%] z-10 bg-sh-secondary-300 rounded-lg md:p-6 p-4 flex flex-col items-center justify-center ">
          <Typography.H2>{data[type].title}</Typography.H2>
          <Input icon={{name: "email", showIcon: true}}
                 input={{
                   placeholder: "Nhập email",
                   value: fields.email,
                   type: "text",
                   onChange: (e) => updateFields({email: e.target.value}),
                 }}
                 label={{
                   showLabel: true,
                   label: "Email",
                 }}
                 control={control}
                 name='email'
                 rules={{required: {value: true, message: 'Required'}}}
          />
          {/*<Input icon={{name: "lock", showIcon: true}}*/}
          {/*       input={{*/}
          {/*         placeholder: "Nhập password",*/}
          {/*         value: fields.password,*/}
          {/*         type: "password",*/}
          {/*         onChange: (e) => updateFields({password: e.target.value})*/}
          {/*       }}*/}
          {/*       label={{showLabel: true, label: "Password"}}*/}
          {/*       variant={"primary"}/>*/}

          <button type={"submit"}>Submit</button>
        </div>
      </form>

  );
};

export default AuthContainer;
