import React, { useState } from "react";
import Icon from "@/components/common/Icon";
import { twMerge } from "tailwind-merge";
import HeaderUser from "@/components/common/Header/HeaderUser";
import HeaderMenuItem from "@/components/common/Header/HeaderMenuItem";
import { HeaderItem } from "@/components/common/Header/HeaderMenu";
import Typography from "@/components/common/Typography";
import InputForm from "@/components/common/Input/InputForm";
import Button from "@/components/common/Button";
import SearchHistoryItem from "@/components/common/Header/SearchHistoryItem";

const HeaderSearch = () => {
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
    setIsInputFocus(true);
  }

  function onSearchBlur() {
    setIsInputFocus(false);
  }

  function toggleSearch() {
    setIsOpenSearch((prevState) => !prevState);
  }

  return (
    <div component-name="HeaderSearch">
      <section className={"hidden md:block"}>
        <div
          className={twMerge(
            `relative flex h-10 items-center justify-end gap-2 rounded-lg bg-sh-secondary-200 p-2 transition-all duration-300 ${isOpenSearch ? "w-[320px]" : "w-10"}`
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
                `absolute left-0 top-[120%] z-20 hidden w-[320px] overflow-hidden rounded-lg border border-sh-secondary-300 bg-sh-background p-4 transition-all md:block ${isInputFocus ? "h-[320px]" : "h-0"}`
              )}
            >
              <Typography.Label>Lịch sử tìm kiếm</Typography.Label>
              <div
                className={
                  "item-center mt-2 flex flex-wrap gap-4 border-t border-sh-primary pt-4"
                }
              >
                <SearchHistoryItem title={"Switch HMX"} />
                <SearchHistoryItem title={"Switch HMX"} />
                <SearchHistoryItem title={"Switch HMX"} />
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
            `fixed bottom-0 right-[-768px] top-0 z-20 h-full w-full border-t-[3px] border-sh-primary border-t-sh-primary bg-sh-background transition-all duration-300 md:hidden ${isOpenSearch && "right-0"}`
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
              <Button
                className={"flex-1 gap-0 p-4"}
                icon={{ showIcon: true, name: "search" }}
                showChildren={false}
              ></Button>
            </div>
            <div className={"mt-6"}>
              <Typography.Label>Lịch sử tìm kiếm</Typography.Label>
              <div
                className={
                  "item-center mt-2 flex flex-wrap gap-4 border-t border-sh-primary pt-4"
                }
              >
                <SearchHistoryItem title={"Switch HMX"} />
                <SearchHistoryItem title={"Switch HMX"} />
                <SearchHistoryItem title={"Switch HMX"} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeaderSearch;
