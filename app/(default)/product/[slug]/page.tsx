import React from "react";
import Navigation from "@/components/common/navigation";
import ProductGallery from "@/components/specific/product-detail/product-gallery";
import ProductInformation from "@/components/specific/product-detail/product-information";
import BlockTitle from "@/components/common/block-title";
import SwitchList from "@/components/specific/switch/switch-list";
import ProductVideoList from "@/components/specific/product-detail/product-video-list";
import Tabs from "@/components/common/tabs";
import ProductRelated from "@/components/specific/product-detail/product-related";

const ProductDetailPage = () => {
  return (
    <div component-name="ProductDetailPage" className={"px-4 md:px-6"}>
      <Navigation className={"py-4 md:py-6"} />

      <div className={"grid grid-cols-12 gap-4 md:gap-6"}>
        <ProductGallery className={"col-span-12 md:col-span-6"} />
        <ProductInformation className={"col-span-12 md:col-span-6"} />
        <BlockTitle
          title={"Videos"}
          icon={{ showIcon: true, name: "keyboard" }}
          className={"col-span-12 p-0 md:p-0"}
        >
          <ProductVideoList />
        </BlockTitle>
        {/*<BlockTitle*/}
        {/*  title={"Có thể bạn quan tâm"}*/}
        {/*  icon={{ showIcon: true, name: "emptyHeart" }}*/}
        {/*  className={*/}
        {/*    "col-span-12 rounded-tl-lg p-0 md:col-span-6 md:border-l md:border-t md:border-sh-secondary-100 md:p-6"*/}
        {/*  }*/}
        {/*>*/}
        {/*  <ProductRelated />*/}
        {/*</BlockTitle>*/}
      </div>
    </div>
  );
};

export default ProductDetailPage;
