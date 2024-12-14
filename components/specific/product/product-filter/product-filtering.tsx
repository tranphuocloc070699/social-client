"use client";

import React, { useState } from "react";
import FilterBlock from "@/components/specific/product/product-filter/filter-block";
import InputForm from "@/components/common/input/InputForm";
import ProductFilterSelectedItem from "@/components/specific/product/product-filter/product-filter-selected-item";
import ProductFilterSelectedList from "@/components/specific/product/product-filter/product-filter-selected-list";
import PriceFiltering from "@/components/specific/product/product-filter/price-filtering";
import SelectFiltering from "@/components/specific/product/product-filter/select-filtering";
import ColorFiltering from "@/components/specific/product/product-filter/color-filtering";
import Icon from "@/components/common/icon";
import { useProductFilterStore } from "@/store/product-filter.store";
import { twMerge } from "tailwind-merge";
import BlockTitle from "@/components/common/block-title";
import useIsMobile from "@/hooks/use-is-mobile";

const ProductFiltering = () => {
  const isMobile = useIsMobile();
  const [inputValue, setInputValue] = useState("");
  const { isExpandFilterOnMobile, toggleFilterOnMobile } =
    useProductFilterStore();

  function handleSearchInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function handleDebounce(e: React.ChangeEvent<HTMLInputElement>) {}

  return (
    <div
      component-name="ProductFiltering"
      className={twMerge(
        `fixed top-0 w-full overflow-y-auto overflow-x-hidden bg-sh-background transition-all duration-300 md:absolute md:w-[340px] md:pr-6 md:pt-10 ${isMobile && "right-[-738px] h-[1200px] w-0"} ${isExpandFilterOnMobile && "right-0 z-[1000] h-full min-h-screen w-full"} `
      )}
    >
      <BlockTitle
        title={"Tìm kiếm"}
        className={"p-4 md:p-0"}
        icon={{ showIcon: true, name: "search" }}
        showAllElement={
          <Icon
            name={"xMark"}
            className={"h-8 w-8 rounded-lg bg-sh-secondary-300 text-sh-primary"}
            onClick={toggleFilterOnMobile}
          />
        }
      >
        <FilterBlock>
          <ProductFilterSelectedList />
        </FilterBlock>
        <FilterBlock>
          <InputForm
            input={{
              placeholder: "Nhập để tìm...",
              name: "input-search",
            }}
            debounce={{ duration: 500, callback: handleDebounce }}
            icon={{ showIcon: true, name: "search" }}
          />
        </FilterBlock>
        <FilterBlock title={"Giá (VND)"}>
          <PriceFiltering />
        </FilterBlock>
        <FilterBlock title={"Thương hiệu"}>
          <SelectFiltering />
        </FilterBlock>
        <FilterBlock title={"Màu sắc"}>
          <ColorFiltering />
        </FilterBlock>
      </BlockTitle>
    </div>
  );
};

export default ProductFiltering;
