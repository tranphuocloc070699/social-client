"use client";

import React from "react";
import CommonInput from "./CommonInput";
import Link from "next/link";
import UserService from "@/services/modules/user.service";
import {ISignUpLoginForm} from "@/types/user/user.interface";
import {useToast} from "@/hooks/use-toast";
import {useUserStore} from "@/store/user.store";
import {Button} from "@/components/ui/button";
import NextImg from 'next/image'
import useCustomState from "@/hooks/use-state";

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
        <div className="flex h-screen">
          <div className="hidden lg:flex items-center justify-center flex-1 bg-white">
            <NextImg src="/assets/images/travel-banner-login.jpg" alt={"Banner"} width={100}
                     height={100} className={"w-full h-full object-cover "}/>
          </div>
          <div className="w-full bg-rose-50 lg:w-1/2 flex items-center justify-center">
            <div className="max-w-md w-full p-6">
              <h1 className="text-3xl font-semibold mb-6 text-rose-700 text-center">
                {data[type].title}
              </h1>
              <h1 className="text-sm font-medium mb-6 text-gray-500 text-center">
                Nơi chia sẻ Du lịch & Ăn uống
              </h1>
              <div className="mt-4 flex flex-col lg:flex-row items-center justify-between">
                <div className="w-full  mb-2 lg:mb-0">
                  <button
                      type="button"
                      className="w-full flex justify-center items-center gap-2 bg-white text-sm text-gray-600 p-2 rounded-md hover:bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300"
                  >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-4"
                        id="google"
                    >
                      <path
                          fill="#fbbb00"
                          d="M113.47 309.408 95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z"
                      ></path>
                      <path
                          fill="#518ef8"
                          d="M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911h-136.89V208.176h245.899z"
                      ></path>
                      <path
                          fill="#28b446"
                          d="m416.253 455.624.014.014C372.396 490.901 316.666 512 256 512c-97.491 0-182.252-54.491-225.491-134.681l82.961-67.91c21.619 57.698 77.278 98.771 142.53 98.771 28.047 0 54.323-7.582 76.87-20.818l83.383 68.262z"
                      ></path>
                      <path
                          fill="#f14336"
                          d="m419.404 58.936-82.933 67.896C313.136 112.246 285.552 103.82 256 103.82c-66.729 0-123.429 42.957-143.965 102.724l-83.397-68.276h-.014C71.23 56.123 157.06 0 256 0c62.115 0 119.068 22.126 163.404 58.936z"
                      ></path>
                    </svg>
                    {" "}
                    {data[type].title} bằng Gmail{" "}
                  </button>
                </div>
              </div>
              <div className="my-4 text-sm text-gray-600 text-center">
                <p>Hoặc</p>
              </div>
              <div className="space-y-4">
                {type === "signup" && (
                    <CommonInput
                        type="text"
                        name="username"
                        placeholder=""
                        className="bg-white"
                        label="Tên người dùng"
                        value={fields.full_name}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateFields({full_name: e.target.value})}
                    />
                )}
                <CommonInput
                    type="text"
                    name="email"
                    placeholder=""
                    className="bg-white"
                    label="Email"
                    value={fields.email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateFields({email: e.target.value})}
                />
                <CommonInput
                    type="text"
                    name="password"
                    placeholder=""
                    className="bg-white"
                    label="Mật khẩu"
                    value={fields.password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateFields({
                      password: e.target.value,
                      password_confirmation: e.target.value
                    })}
                />
                <div>
                  <Button
                      onClick={onSubmit}
                      className="w-full bg-rose-700 text-white"
                  >
                    {data[type].title}
                  </Button>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-600 text-center">
                <p>
                  {data[type].switchTitle}{" "}
                  <Link
                      href={data[type].switchLink}
                      className="text-rose-900 font-semibold hover:underline"
                  >
                    {data[type].switchBtnLabel}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default AuthContainer;
