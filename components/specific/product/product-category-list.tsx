import React from "react";
import ProductBadge from "@/components/specific/product/product-badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const ProductCategoryList = () => {
  return (
    <div component-name="ProductCategoryList" className={""}>
      <ScrollArea className="scroll-snap-x mandatory flex w-full items-center gap-4 overflow-x-auto md:gap-6">
        <div className="flex gap-4 py-2">
          <ProductBadge className="scroll-snap-center" />
          <ProductBadge className="scroll-snap-center" />
          <ProductBadge className="scroll-snap-center" />
          <ProductBadge className="scroll-snap-center" />
          <ProductBadge className="scroll-snap-center" />
          <ProductBadge className="scroll-snap-center" />
          <ProductBadge className="scroll-snap-center" />
          <ProductBadge className="scroll-snap-center" />
          <ProductBadge className="scroll-snap-center" />
          <ProductBadge className="scroll-snap-center" />
          <ProductBadge className="scroll-snap-center" />
          <ProductBadge className="scroll-snap-center" />
        </div>
        <ScrollBar orientation="horizontal" className={"mt-4"} />
      </ScrollArea>
    </div>
  );
};

export default ProductCategoryList;
