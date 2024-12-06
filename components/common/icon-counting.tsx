import React from "react";
import { IconProps } from "@/components/common/input/InputForm";
import Typography from "@/components/common/typography";
import Icon from "@/components/common/icon";

type Props = {
  count: number;
  icon: IconProps;
  activeIcon?: IconProps;
};

const IconCounting = ({ count, icon }: Props) => {
  return (
    <div component-name="IconCounting" className={"flex items-center gap-1"}>
      <Typography.Text className={"text-sh-primary"}>{count}</Typography.Text>
      <Icon name={icon.name} size={20} className={"text-sh-primary"} />
    </div>
  );
};

export default IconCounting;
