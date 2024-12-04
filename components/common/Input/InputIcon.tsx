import {twMerge} from "tailwind-merge";
import Icon from "@/components/common/Icon";
import React from "react";
import {InputIconProps} from "@/components/common/Input/InputForm";

const InputIcon = ({fieldState, validation, icon, defaultClassName}: InputIconProps) => {
  const commonIconClasses = `absolute inset-0 h-full w-full transition-all`;
  const warningIconClasses = twMerge(`${commonIconClasses} text-red-500 opacity-0`,
      validation?.showWarningIcon && fieldState?.error?.message && "opacity-100");
  const regularIconClasses = twMerge(`${commonIconClasses} opacity-100 ${defaultClassName.icon} ${icon?.className}`,
      validation?.showWarningIcon && fieldState?.error?.message && "opacity-0");

  return <div className={twMerge(`relative ${!validation && !icon ? "w-0 h-0" : "w-6 h-5"}`)}>
    <Icon name="warning" className={warningIconClasses}/>
    {icon?.showIcon && icon?.name && (
        <Icon name={icon?.name} className={regularIconClasses}/>
    )}
  </div>
}

export default InputIcon