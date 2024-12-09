import React, { useMemo } from "react";
import { twMerge } from "tailwind-merge";
import Icon, { icons } from "@/components/common/icon";
import SpinnerLoading from "@/components/common/spinner-loading";
import { IconProps } from "@/components/common/input/InputForm";
import Link from "next/link";
import ButtonContent from "@/components/common/button/button-content";

export interface ButtonProps {
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  asLink?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "shadcn" | "secondary" | false;
  showChildren?: boolean;
  icon?: IconProps;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asLink, children, ...restProps }, ref) => {
    return asLink ? (
      <Link className={"w-full"} href={asLink}>
        <ButtonContent ref={ref} {...restProps}>
          {children}
        </ButtonContent>
      </Link>
    ) : (
      <ButtonContent ref={ref} {...restProps}>
        {children}
      </ButtonContent>
    );
  }
);

Button.displayName = "Button";
export default Button;
