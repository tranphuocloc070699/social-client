import React, {useMemo} from 'react';
import {twMerge} from "tailwind-merge";
import {icons} from "@/components/common/Icon";
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
  icon?: IconProps
}

const Button = React.forwardRef<HTMLButtonElement, Props>(({
                                                             className,
                                                             loading,
                                                             disabled,
                                                             children,
                                                             variant,
                                                             type = "button",
                                                             asLink
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


  return (
      <button component-name="Button" type={type} ref={ref}
              className={twMerge(` ${classNameProcessor}`)}>
        <div
            className={twMerge(`relative transition-all ${loading ? "w-10 h-10 opacity-100" : "w-0 h-0 opacity-0"} `)}>
          <SpinnerLoading className={twMerge(`absolute inset-0 w-full h-full`)}/>

        </div>
        {children}
      </button>
  );
})


Button.displayName = "Button";
export default Button;