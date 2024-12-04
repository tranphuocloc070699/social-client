"use client";

import React, {useMemo} from "react";
import InputForm from "./Input/InputForm";
import {IAuthForm} from "@/types/user/user.interface";
import {useToast} from "@/hooks/use-toast";
import {useUserStore} from "@/store/user.store";
import Button from "@/components/common/Button";
import NextImg from 'next/image';
import Typography from "@/components/common/Typography";
import background from "@/public/assets/images/login-background.png";
import mobileBackgroundTop from "@/public/assets/images/mobile-bg-top.svg";
import mobileBackgroundBottom from "@/public/assets/images/mobile-bg-bot.svg";
import logo from "@/public/assets/images/Logo.svg"
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import UserService from "@/services/modules/user.service";

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
      switchLink: "/dang-ky"
    },
    signup: {
      title: "Đăng ký",
      switchTitle: "Đã có tài khoản?",
      switchBtnLabel: "Đăng nhập",
      switchLink: "/dang-nhap",
    },
  };

  const schema = useMemo(() => {
    const baseSchema = yup.object({
      email: yup
      .string()
      .email("Email không hợp lệ")
      .required("Email là bắt buộc"),
      password: yup
      .string()
      .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
      .required("Mật khẩu là bắt buộc"),
    });

    if (type === "signup") {
      return baseSchema.shape({
        full_name: yup
        .string()
        .required("Tên đầy đủ là bắt buộc"),
        password_confirmation: yup
        .string()
        .oneOf([yup.ref("password")], "Mật khẩu xác nhận không khớp")
        .required("Mật khẩu xác nhận là bắt buộc"),
      });
    }

    return baseSchema;
  }, [type])

  const {control, handleSubmit, formState: {isSubmitting}} = useForm<IAuthForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      full_name: "",
      email: "",
      password: "",
      password_confirmation: ""
    },
  });

  async function onSubmit(data: IAuthForm) {

    const userService = new UserService();

    let response;
    if (type === "signup") {
      response = await userService.signup(data);
    }
    if (type === "login") {
      response = await userService.login(data);
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
            className="absolute left-[50%] translate-y-[-50%] top-[50%] translate-x-[-50%] z-10 bg-sh-secondary-300 rounded-lg md:p-6 p-4 flex flex-col gap-2 items-center justify-center md:w-[500px] w-[80%]">
          <Typography.H2>{data[type].title}</Typography.H2>
          {type === "signup" &&
							<InputForm icon={{name: "user", showIcon: true}}
							           input={{
                           placeholder: "Nhập nickname",
                           type: "text",
                           name: "full_name",
                         }}
							           label={{
                           showLabel: true,
                           label: "Nickname",
                         }}
							           validation={{
                           control,
                           showWarningIcon: true,
                         }}

							/>
          }
          <InputForm icon={{name: "email", showIcon: true}}
                     input={{
                       placeholder: "Nhập email",
                       type: "text",
                       name: "email",
                     }}
                     label={{
                       showLabel: true,
                       label: "Email",
                     }}
                     validation={{
                       control,
                       showWarningIcon: true,
                     }}


          />
          <InputForm icon={{name: "key", showIcon: true}}
                     input={{
                       placeholder: "Nhập mật khẩu",
                       type: "password",
                       name: "password",
                     }}
                     label={{
                       showLabel: true,
                       label: "Mật khẩu",
                     }}
                     validation={{
                       control,
                       showWarningIcon: true,
                     }}
          />
          {type === "signup" &&
							<InputForm icon={{name: "key", showIcon: true}}
							           input={{
                           placeholder: "Nhập lại mật khẩu",
                           type: "password",
                           name: "password_confirmation",
                         }}
							           label={{
                           showLabel: true,
                           label: "Xác nhận mật khẩu",
                         }}
							           validation={{
                           control,
                           showWarningIcon: true,
                         }}
							/>
          }
          <Button loading={isSubmitting}
                  type={"submit"}
                  variant={"primary"}>{data[type].title}</Button>
          <div className="flex items-center justify-center p-5 relative w-full">
            <Typography.Label
                className={"bg-sh-secondary-300 text-sh-secondary-100"}>Hoặc</Typography.Label>
            <div
                className={"bg-sh-secondary-100 absolute h-[1px] w-full top-[50%] left-0 right-0 translate-x-[-50%]"}></div>
          </div>
        </div>
      </form>

  );
};

export default AuthContainer;
