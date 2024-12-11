"use client";

import React, { useState } from "react";
import Icon from "@/components/common/icon";
import { twMerge } from "tailwind-merge";
import Typography from "@/components/common/typography";
import InputForm from "@/components/common/input/InputForm";
import { Button } from "@/components/ui/button";
import SearchHistoryItem from "@/components/common/header/search-history-item";

type Props = {
  className?: string;
};

const HeaderSearch = ({ className }: Props) => {
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isInputFocus, setIsInputFocus] = useState(false);

  function openSearch() {
    setIsOpenSearch(true);
  }

  function closeSearch() {
    console.log("trigger...");
    setIsOpenSearch(false);
  }

  function onSearchChange() {}

  function onSearchFocus() {
    console.log("search focus");
    setIsInputFocus(true);
  }

  function onSearchBlur() {
    console.log("search blur");
    setIsInputFocus(false);
  }

  function toggleSearch() {
    setIsOpenSearch((prevState) => !prevState);
  }

  return (
    <div component-name="HeaderSearch" className={className}>
      <section className={"hidden md:block"}>
        <div
          className={twMerge(
            `relative flex h-10 items-center justify-end gap-2 overflow-hidden rounded-lg bg-sh-secondary-200 p-2 transition-all duration-300 ${isOpenSearch ? "w-[320px]" : "w-10"}`
          )}
        >
          <div className={"absolute h-10 w-full"}>
            <InputForm
              input={{
                value: "",
                placeholder: "Nhập để tìm...",
                name: "search-input",
                onFocus: onSearchFocus,
                onBlur: onSearchBlur,
                onChange: onSearchChange,
              }}
              wrapperClassName={"w-full"}
            />
            <div
              className={twMerge(
                `absolute left-0 top-[120%] z-20 hidden w-[320px] overflow-hidden rounded-lg bg-sh-background md:block ${isInputFocus ? "h-[320px] border border-sh-secondary-300 p-6" : "h-0 border-none p-0"}`
              )}
            >
              <Typography.Label>Lịch sử tìm kiếm</Typography.Label>
              <div
                className={
                  "item-center mt-4 flex flex-wrap gap-6 border-t border-sh-primary pt-6"
                }
              >
                <SearchHistoryItem title={"switch HMX"} />
                <SearchHistoryItem title={"switch HMX"} />
                <SearchHistoryItem title={"switch HMX"} />
              </div>
            </div>
          </div>
          <Icon
            name={"search"}
            size={24}
            className={"z-10 cursor-pointer text-sh-primary"}
            onClick={toggleSearch}
          />
        </div>
      </section>
      <section className={"md:hidden"}>
        <Icon
          name={"search"}
          size={24}
          className={"cursor-pointer text-sh-primary"}
          onClick={openSearch}
        />
        <div
          className={twMerge(
            `fixed bottom-0 right-[-768px] top-0 z-50 h-full w-0 border-t-[3px] border-sh-primary border-t-sh-primary bg-sh-background transition-all duration-300 md:hidden ${isOpenSearch && "right-0 w-full"}`
          )}
        >
          <div className={"p-4"}>
            <div className={"flex items-center justify-between"}>
              <Typography.H2 className={"text-sh-primary"}>
                Tìm kiếm
              </Typography.H2>
              <Icon
                size={32}
                className={
                  "h-10 w-10 rounded-lg bg-sh-secondary-300 p-2 text-sh-text"
                }
                name={"xMark"}
                onClick={closeSearch}
              />
            </div>
            <div className={"mt-6 flex items-center gap-4"}>
              <InputForm
                input={{
                  placeholder: "Nhập để tìm kiếm...",
                  name: "search-input",
                  value: "",

                  onChange: () => {
                    console.log("hello");
                  },
                }}
                wrapperClassName={"h-10"}
                label={{ showLabel: false }}
              />
              <Button className={"flex-1 gap-0 p-4"} icon={"search"}></Button>
            </div>
            <div className={"mt-6"}>
              <Typography.Label
                className={"text-lg text-sh-primary brightness-125"}
              >
                Lịch sử tìm kiếm
              </Typography.Label>
              <div
                className={
                  "item-center mt-2 flex flex-wrap gap-4 border-t border-sh-primary pt-4"
                }
              >
                <SearchHistoryItem title={"switch HMX"} />
                <SearchHistoryItem title={"switch HMX"} />
                <SearchHistoryItem title={"switch HMX"} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeaderSearch;
