import React from "react";
import InputForm from "@/components/common/input/InputForm";
import CheckboxItem from "@/components/specific/product/product-filter/checkbox-item";
import Typography from "@/components/common/typography";

const SelectFiltering = () => {
  return (
    <div component-name="SelectFiltering">
      <InputForm
        label={{ showLabel: false }}
        input={{
          placeholder: "Nhập tên thương hiệu",
          name: "input-search",
        }}
        icon={{ showIcon: true, name: "search" }}
      />

      <div className={"mt-4 flex flex-col gap-4"}>
        <CheckboxItem />
        <CheckboxItem />
        <CheckboxItem />
        <CheckboxItem />
        <CheckboxItem />
        <CheckboxItem />
        <Typography.Label className={"cursor-pointer underline"}>
          Xem tất cả
        </Typography.Label>
      </div>
    </div>
  );
};

export default SelectFiltering;
