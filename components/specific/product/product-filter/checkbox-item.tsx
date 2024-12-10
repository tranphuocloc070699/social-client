import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import Typography from "@/components/common/typography";

const CheckboxItem = () => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox className={"h-8 w-8 bg-sh-secondary-300 accent-sh-primary"} />
      <Typography.Label>HMX</Typography.Label>
    </div>
  );
};

export default CheckboxItem;
