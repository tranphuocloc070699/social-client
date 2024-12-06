"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import Tabs from "@/components/common/tabs";
import SwitchList from "@/components/specific/switch/switch-list";
import PostList from "@/components/specific/post/post-list";

type Props = {
  className?: string;
};
const ProductRelated = ({ className }: Props) => {
  function handleTabChange(id: string) {}

  return (
    <div className={twMerge(` ${className}`)} component-name="ProductRelated">
      <Tabs onChange={handleTabChange} />

      <PostList className={"md:grid-cols-1"} />
    </div>
  );
};

export default ProductRelated;
