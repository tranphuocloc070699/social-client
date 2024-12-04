import React, {useMemo} from 'react';
import {twMerge} from "tailwind-merge";
import Icon, {icons} from "@/components/common/Icon";
import SpinnerLoading from "@/components/common/SpinnerLoading";

interface IconProps {
  showIcon?: boolean;
  name: keyof typeof icons | string;
}

interface Props {
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  asLink?: boolean;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | false;
  showChildren?: boolean;
  icon?: IconProps;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = React.forwardRef<HTMLButtonElement, Props>(({
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
                                                           }, ref) => {

  const classNameProcessor = useMemo(() => {
    let className = "flex items-center justify-center text-center gap-2 font-sans font-medium text-base tracking-wide px-4 h-10 rounded-lg w-full cursor-pointer disabled:cursor-not-allowed disabled:opacity-10 md:text-sm"
    const defaultVariant = variant ? variant : "primary";

    switch (defaultVariant) {
      case "primary":
        className = className.concat(" bg-sh-primary text-sh-background")
        break;
      default:
        break;
    }

    return className;
  }, [variant]);

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    if (loading) return;

    if (onClick) onClick(e);
  }

  return (
      <button component-name="Button" type={type} disabled={disabled} ref={ref}
              className={twMerge(` ${classNameProcessor}`)} onClick={handleClick}>
        <div
            className={twMerge(`relative transition-all ${(loading || icon?.showIcon) ? "w-7 h-7 opacity-100" : "w-0 h-0 opacity-0"} `)}>
          <SpinnerLoading
              className={twMerge(`absolute inset-0 w-full h-full transition-all ${loading ? "opacity-100" : "opacity-0"}`)}/>
          <Icon name={icon?.name}
                className={twMerge(`absolute inset-0 w-full h-full transition-all ${(icon?.showIcon && !loading) ? "opacity-100" : "opacity-0"}`)}/>
        </div>
        {showChildren && children}
      </button>
  );
})


Button.displayName = "Button";
export default Button;