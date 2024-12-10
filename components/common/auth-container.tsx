"use client";

import React, { useMemo } from "react";
import InputForm from "@/components/common/input/InputForm";
import { IAuthForm } from "@/types/user/user.interface";
import { useToast } from "@/hooks/use-toast";
import { useUserStore } from "@/store/user.store";
import Button from "@/components/common/button";
import NextImg from "next/image";
import Typography from "@/components/common/typography";
import background from "@/public/assets/images/login-background.png";
import mobileBackgroundTop from "@/public/assets/images/mobile-bg-top.svg";
import mobileBackgroundBottom from "@/public/assets/images/mobile-bg-bot.svg";
import googleIcon from "@/public/assets/images/google-icon.svg";
import logo from "@/public/assets/images/Logo.svg";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import UserService from "@/services/modules/user.service";
import Link from "next/link";

interface Props {
  type: "login" | "signup";
}

const AuthContainer = ({ type }: Props) => {
  const { toast } = useToast();
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
        full_name: yup.string().required("Tên đầy đủ là bắt buộc"),
        password_confirmation: yup
          .string()
          .oneOf([yup.ref("password")], "Mật khẩu xác nhận không khớp")
          .required("Mật khẩu xác nhận là bắt buộc"),
      });
    }

    return baseSchema;
  }, [type]);

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<IAuthForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      full_name: "",
      email: "",
      password: "",
      password_confirmation: "",
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
    if (response?.success) {
      toast({ variant: "default", title: "Đăng ký thành công" });
    } else {
      toast({
        variant: "destructive",
        title: "Có lỗi xảy ra",
      });
    }
  }

  function handleSocialAuth() {}

  return (
    <form
      onSubmit={handleSubmit((data) => onSubmit(data))}
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-sh-secondary-300 p-5 md:bg-sh-background"
    >
      <NextImg
        className="absolute inset-0 hidden h-full w-full object-cover md:block"
        src={background}
        quality={100}
        alt="background"
        layout="fill"
      />
      <NextImg
        className="absolute right-0 top-0 md:hidden"
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
        className="absolute left-4 top-4 h-auto w-[100px] object-cover md:left-[40px] md:top-6 md:w-[180px]"
        src={logo}
        quality={100}
        alt="logo"
        width={180}
        height={45}
      />
      <div className="absolute left-[50%] top-[50%] z-10 flex w-[80%] translate-x-[-50%] translate-y-[-50%] flex-col items-center justify-center gap-2 rounded-lg bg-sh-secondary-300 p-4 md:w-[500px] md:px-6 md:py-10">
        <Typography.H2>{data[type].title}</Typography.H2>
        {type === "signup" && (
          <InputForm
            icon={{ name: "user", showIcon: true }}
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
        )}
        <InputForm
          icon={{ name: "email", showIcon: true }}
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
        <InputForm
          icon={{ name: "key", showIcon: true }}
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
        {type === "signup" && (
          <InputForm
            icon={{ name: "key", showIcon: true }}
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
        )}
        <Button
          loading={isSubmitting}
          type={"submit"}
          variant={"primary"}
          className={"w-full"}
        >
          {data[type].title}
        </Button>
        <div className={"flex w-full items-center justify-between"}>
          {type === "login" ? (
            <span
              className={
                "cursor-pointer text-nowrap text-sm font-semibold text-sh-text"
              }
            >
              Quên mật khẩu
            </span>
          ) : (
            <></>
          )}
          <span
            className={
              "flex w-full items-center justify-end gap-1 text-right text-sh-secondary-100"
            }
          >
            {data[type].switchTitle}
            <Link
              className={"font-semibold text-sh-primary underline"}
              href={data[type].switchLink}
            >
              {data[type].switchBtnLabel}
            </Link>
          </span>
        </div>
        <div className="relative flex w-full items-center justify-center p-5">
          <Typography.Label
            className={"z-10 bg-sh-secondary-300 px-4 text-sh-secondary-100"}
          >
            Hoặc
          </Typography.Label>
          <div className={"absolute h-[1px] w-full bg-sh-secondary-100"}></div>
        </div>
        <Button
          loading={isSubmitting}
          onClick={() => handleSocialAuth()}
          icon={{ showIcon: true, name: "/assets/images/google-icon.svg" }}
          variant={"primary"}
          className={
            "w-full bg-sh-secondary-200 tracking-wide text-sh-text shadow-sm shadow-sh-background"
          }
        >
          Google
        </Button>
      </div>
    </form>
  );
};

export default AuthContainer;
