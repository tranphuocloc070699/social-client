import React, {forwardRef, useMemo, useState} from "react";
import {twMerge} from "tailwind-merge";
import Typography from "@/components/common/Typography";
import Icon from "@/components/common/Icon";
import {IDefaultClassName, Props} from "@/components/common/Input/InputForm";
import InputIcon from "@/components/common/Input/InputIcon";

const TextInput = forwardRef<HTMLInputElement, Props>(
    (
        {
          label,
          input,
          icon,
          variant,
          groupClassName,
          wrapperClassName,
          validation,
          fieldState,
          field,
        },
        ref
    ) => {
      const [showPassword, setShowPassword] = useState(false);
      const classNameProcessor = useMemo(() => {
        const baseClassName: IDefaultClassName = {
          wrapper: `w-full ${wrapperClassName}`,
          inputGroup: `flex items-center rounded-lg px-4 py-2 gap-2 ${groupClassName} ${label?.showLabel && "mt-1"}`,
          label: label?.className || "",
          input: `w-full ${input?.className}`,
          icon: "",
        };

        const variantClass = variant === false ? variant : "primary";

        switch (variantClass) {
          case "primary":
            baseClassName.input += " placeholder:text-sh-secondary-100 outline-none border-none bg-sh-secondary-200 text-white";
            baseClassName.inputGroup += " bg-sh-secondary-200 text-white";
            if (icon?.showIcon) baseClassName.icon = "text-white";
            break;
          default:
            break;
        }

        return baseClassName;
      }, [variant, icon, input?.type, wrapperClassName, groupClassName, label?.className]);

      const typeProcessor = useMemo(() => {
        if (input.type === "password") {
          return showPassword ? "text" : "password";
        }
        if (input.type === "number") {
          return "text";
        }
        return input?.type || "text";
      }, [input?.type, showPassword]);

      // Number validation function
      const numberValidation = (value: string): boolean => /^-?\d*$/.test(value);

      const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!input?.onChange) return;
        if (input?.type === "number" && !numberValidation(e.target.value)) return;
        input.onChange(e);
      };

      return (
          <div className={twMerge(classNameProcessor.wrapper)}>
            {label?.showLabel && (
                <Typography.Label className={twMerge(classNameProcessor.label)}>
                  {label?.label}
                </Typography.Label>
            )}
            <span className={twMerge(classNameProcessor.inputGroup)}>
          <InputIcon
              defaultClassName={classNameProcessor}
              icon={icon}
              validation={validation}
              fieldState={fieldState}
          />
          <input
              placeholder={input.placeholder}
              type={typeProcessor}
              className={twMerge(classNameProcessor.input)}
              {...(field ? {...field} : {value: input.value, onChange, ref})}
          />
              {input?.type === "password" && (
                  <Icon
                      onClick={() => setShowPassword((prev) => !prev)}
                      name={showPassword ? "eyeOff" : "eye"}
                      className={twMerge(`h-5 w-5 cursor-pointer ${icon?.className}`)}
                  />
              )}
        </span>

            <p
                className={twMerge(
                    `text-sm text-red-500 mt-1 transform transition-all duration-300 ease-in-out h-6`,
                    fieldState?.error?.message ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"
                )}
            >
              {fieldState?.error?.message}
            </p>

          </div>
      );
    }
);

TextInput.displayName = "TextInput";

export default TextInput;
