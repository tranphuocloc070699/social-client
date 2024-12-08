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
      asLink,
      showChildren = true,
      icon,
      onClick,
    },
    ref
  ) => {
    const classNameProcessor = useMemo(() => {
      let classNameGeneral = ` flex items-center justify-center text-center gap-2 font-sans font-medium text-base tracking-wider px-4 h-10 rounded-lg w-full cursor-pointer disabled:cursor-not-allowed disabled:opacity-10 md:text-sm }`;
      const defaultVariant = variant ? variant : "primary";

      switch (defaultVariant) {
        case "primary":
          classNameGeneral = classNameGeneral.concat(
            " bg-sh-primary text-sh-background"
          );
          break;
        default:
          break;
      }
      console.log({ className });
      return `${classNameGeneral} ${className}`;
    }, [variant]);

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
        className={twMerge(` ${classNameProcessor}`)}
        onClick={handleClick}
      >
        <div
          className={twMerge(
            `relative transition-all ${loading || icon?.showIcon ? "h-7 w-7 opacity-100" : "h-0 w-0 opacity-0"}`
          )}
        >
          <SpinnerLoading
            className={twMerge(
              `absolute inset-0 h-full w-full transition-all ${loading ? "opacity-100" : "opacity-0"}`
            )}
          />
          <Icon
            name={icon?.name}
            className={twMerge(
              `absolute inset-0 h-full w-full transition-all ${icon?.showIcon && !loading ? "opacity-100" : "opacity-0"}`
            )}
          />
        </div>
        {showChildren && children}
      </button>
    );
  }
);

ButtonContent.displayName = "ButtonContent";
export default ButtonContent;
