"use client";

import React, { forwardRef, useMemo } from "react";
import { twMerge } from "tailwind-merge";
import SpinnerLoading from "@/components/common/spinner-loading";
import Icon, { icons } from "@/components/common/icon";
import { Button } from "@/components/ui/button";
import InputForm from "@/components/common/input/InputForm";
import { ButtonProps } from "@/components/common/button";

const ButtonContent = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      loading,
      disabled,
      children,
      variant,
      type = "button",
      showChildren = true,
      icon,
      onClick,
    },
    ref
  ) => {
    const classNameProcessor = useMemo(() => {
      let classNameGeneral = `inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-10 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0`;
      const defaultVariant = variant ? variant : "primary";

      switch (defaultVariant) {
        case "primary":
          classNameGeneral += " bg-sh-primary text-sh-background";
          break;
        case "shadcn":
          classNameGeneral += " bg-sh-primary text-sh-background";
          break;
        default:
          break;
      }
      return `${classNameGeneral} ${className}`;
    }, [variant, className]);

    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
      if (loading) return;

      if (onClick) onClick(e);
    }

    return (
      <button
        component-name="Button"
        type={type}
        disabled={disabled}
        ref={ref}
        className={twMerge(`${classNameProcessor}`)}
        onClick={handleClick}
      >
        {loading && <SpinnerLoading className={twMerge(``)} />}
        {icon?.showIcon && !loading && (
          <div>
            <Icon name={icon?.name} size={16} />
          </div>
        )}

        {showChildren && children}
      </button>
    );
  }
);

ButtonContent.displayName = "ButtonContent";
export default ButtonContent;
