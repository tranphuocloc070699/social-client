import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import SpinnerLoading from "@/components/common/spinner-loading";
import Icon, { icons } from "@/components/common/icon";
import Link from "next/link";

const buttonVariants = cva(
  "transition-all duration-300 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring  [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // default:
        //   "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        default:
          "bg-sh-primary text-sh-background shadow hover:bg-sh-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  icon?: keyof typeof icons | string;
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      loading,
      href,
      icon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const Comp = href && !disabled ? Link : asChild ? Slot : "button";
    const linkProps = href && !disabled ? { href } : {};

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className }),
          disabled && "pointer-events-none opacity-50"
        )}
        ref={ref}
        {...linkProps}
        {...props}
      >
        {loading && <Icon name={"spinner"} className={"animate-spin"} />}
        {icon && !loading && <Icon name={icon} size={16} />}
        {children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
