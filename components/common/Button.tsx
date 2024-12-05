import React, {useMemo} from 'react';
import {twMerge} from "tailwind-merge";
import Icon, {icons} from "@/components/common/Icon";
import SpinnerLoading from "@/components/common/SpinnerLoading";
import {IconProps} from "@/components/common/Input/InputForm";
import Link from "next/link";
import ButtonContent from "@/components/common/Button/ButtonContent";


export interface ButtonProps {
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  asLink?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | false;
  showChildren?: boolean;
  icon?: IconProps;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
                                                                   asLink,
                                                                   children,
                                                                   ...restProps
                                                                 }, ref) => {


  return (
      asLink ? <Link className={"w-full"} href={asLink}>
        <ButtonContent ref={ref} {...restProps}>{children}</ButtonContent>
      </Link> : <ButtonContent ref={ref} {...restProps}>{children}</ButtonContent>
  );
})


Button.displayName = "Button";
export default Button;