import React, {forwardRef, useMemo, useState} from "react";
import Typography from "@/components/common/Typography";
import {twMerge} from "tailwind-merge";
import Icon, {icons} from "@/components/common/Icon";
import {Controller} from "react-hook-form";


interface ErrorProps {
  showIcon?: boolean;
  message?: string;
  color?: string;
}

interface LabelProps {
  showLabel?: boolean;
  label?: string;
  className?: string;
}

interface IconProps {
  name: keyof typeof icons | string;
  showIcon?: boolean;
  className?: string;
  position?: "left" | "right";
}

interface InputProps {
  type?: string;
  placeholder: string;
  value: string;
  name?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

interface Props {
  label?: LabelProps;
  icon?: IconProps;
  input: InputProps;
  error?: ErrorProps;
  groupClassName?: string;
  wrapperClassName?: string;
  variant?: "primary" | "secondary" | false;
  control?: any;
  name: string;
  rules?: any;
}


const Input = forwardRef<HTMLInputElement, Props>(
    ({
       label,
       input,
       icon,
       error,
       variant,
       groupClassName,
       wrapperClassName,
       name,
       control,
       rules
     }, ref) => {

      const [showPassword, setShowPassword] = useState(false);


      const defaultClassName = useMemo(() => {
        const defaultClassName = {
          inputGroup: "",
          label: "",
          input: "w-full",
          icon: "",
        }
        const defaultVariant = variant ? variant : "primary";

        switch (defaultVariant) {
          case "primary":
            defaultClassName.input = "w-full placeholder:text-sh-secondary-100 outline-none border-none bg-sh-secondary-200 text-white"
            defaultClassName.inputGroup = "bg-sh-secondary-200  text-white"
            if (icon?.showIcon) {
              defaultClassName.icon = "text-white"
              if (icon?.position === "right" && input?.type !== "password") {
                defaultClassName.icon = `${defaultClassName.icon} order-1`
              }
            }
            break;
          default:
            if (input?.className?.includes("bg"))
              break;
        }
        return defaultClassName;
      }, [variant]);

      const defaultType = useMemo(() => {
        if (input.type === "password") {
          return showPassword ? "text" : "password";
        }
        if (input.type === "number") {
          return "text";
        }

        return input?.type || "text"

      }, [input?.type, showPassword]);

      const numberValidation = (input: string): boolean => {
        return /^-?\d*$/.test(input);
      };

      const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!input?.onChange) return;
        if (input?.type === "number" && !numberValidation(e.target.value)) return;
        input.onChange(e)
      }

      const iconProcessor = useMemo(() => {
        if (error?.showIcon && error?.message) {
          return <Icon name={"warning"}
                       className={twMerge(`h-5 w-5 text-red-500`)}/>
        }

        if (icon?.showIcon) return <Icon name={icon?.name}
                                         className={twMerge(`h-5 w-5 ${defaultClassName.icon} ${icon?.className}`)}/>


        return <div></div>
      }, [error, icon]);


      return (
          <div className={twMerge(`${wrapperClassName}`)}>
            {label?.showLabel && (
                <Typography.Label
                    className={twMerge(`${label?.className}`)}
                >
                  {label?.label}
                </Typography.Label>
            )}
            <span
                className={twMerge(`flex items-center rounded-lg px-4 py-2 gap-2 ${defaultClassName.inputGroup} ${groupClassName} ${error?.message && "border border-red-500"}`)}>
              {iconProcessor}
              <Controller
                  name={name}
                  rules={rules}
                  control={control}
                  render={({field, fieldState}) => (
                      <div>
                        <input
                            placeholder={input.placeholder}
                            type={defaultType}
                            className={twMerge(`${defaultClassName.input} ${input?.className} `)}
                            // value={input.value}
                            // onChange={onChange}
                            {...field}
                        />
                        {fieldState.error && fieldState.error.message &&
														<div>{fieldState.error.message}</div>}
                      </div>
                  )}
              />

              {input?.type === "password" &&
									<Icon onClick={() => setShowPassword(prevState => !prevState)}
									      name={showPassword ? "eyeOff" : "eye"}
									      className={twMerge(`h-5 w-5 cursor-pointer ${icon?.className}`)}/>}
            </span>
            {error?.message && (
                <p className="text-sm text-red-500 mt-1">{error.message}</p>
            )}
          </div>
      );
    }
);

// Add display name for debugging purposes
Input.displayName = "Input";
export default Input;


/*
* Requirement:
* - Add Icon and change icon position (left,right) - done
* - Create toggle password type - done
* - Create number type - done
* - Custom class - done
* - Validation
* */

