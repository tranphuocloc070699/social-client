import React from "react";
import ProductBadge from "@/components/specific/product/product-badge";
import InputForm from "@/components/common/input/InputForm";
import Icon from "@/components/common/icon";
// import Button from "@/components/common/button";
import { Button } from "@/components/ui/button";

const PriceFiltering = () => {
  return (
    <div component-name="PriceFiltering">
      <div className={"flex flex-wrap items-center gap-4"}>
        <ProductBadge className={"text-sh-text"} />
        <ProductBadge className={"text-sh-text"} />
        <ProductBadge className={"text-sh-text"} />
        <ProductBadge className={"text-sh-text"} />
      </div>
      <div className={"mt-6 flex items-center gap-2"}>
        <InputForm
          // wrapperClassName={"h-10"}
          input={{ name: "min-price", placeholder: "Thấp" }}
        />
        <Icon name={"minus"} size={24} className={"text-sh-secondary-100"} />
        <InputForm input={{ name: "min-price", placeholder: "Cao" }} />

        <Button className={"h-10 w-10"}>
          <Icon name={"plus"} />
        </Button>
      </div>
    </div>
  );
};

export default PriceFiltering;
