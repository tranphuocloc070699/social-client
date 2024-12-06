import React from "react";
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

const ProductPage = () => {
  return (
    <div component-name="ProductPage" className={"px-4 md:px-6"}>
      <Navigation className={"py-4 md:py-6"} />

      <div className={"grid grid-cols-12 gap-4 md:gap-6"}>
        <BlockTitle
          title={"Tìm kiếm"}
          className={"col-span-12 md:col-span-4"}
          icon={{ showIcon: true, name: "search" }}
        >
          <ProductFiltering />
        </BlockTitle>

        <BlockTitle
          title={"Switch"}
          className={"col-span-12 md:col-span-8"}
          icon={{ showIcon: true, name: "keyboard" }}
        >
          <ProductFilterResulting />
        </BlockTitle>
      </div>
    </div>
  );
};

export default ProductPage;
