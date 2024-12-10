"use client";

import React, { useEffect } from "react";
import Navigation from "@/components/common/navigation";
import ProductGallery from "@/components/specific/product-detail/product-gallery";
import ProductInformation from "@/components/specific/product-detail/product-information";
import BlockTitle from "@/components/common/block-title";
import SwitchList from "@/components/specific/switch/switch-list";
import ProductVideoList from "@/components/specific/product-detail/product-video-list";
import Tabs from "@/components/common/tabs";
import ProductRelated from "@/components/specific/product-detail/product-related";
import ProductFilterResulting from "@/components/specific/product/product-filter-resulting";
import ProductFiltering from "@/components/specific/product/product-filter/product-filtering";
import Icon from "@/components/common/icon";
import { useProductFilterStore } from "@/store/product-filter.store";

const ProductPage = () => {
  const { toggleFilterOnMobile } = useProductFilterStore();

  return (
    <div component-name="ProductPage" className={"px-4 md:px-6"}>
      <Navigation className={"py-4 md:py-6"} />

      <div className={"relative"}>
        <ProductFiltering />
        <BlockTitle
          title={"Switch"}
          className={"md:ml-[340px] md:pt-10"}
          showAllElement={
            <Icon
              name={"filters"}
              className={"h-8 w-8 text-sh-primary"}
              onClick={toggleFilterOnMobile}
            />
          }
          icon={{ showIcon: true, name: "keyboard" }}
        >
          <ProductFilterResulting />
        </BlockTitle>
      </div>
    </div>
  );
};

export default ProductPage;
