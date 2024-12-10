import React, { forwardRef, useCallback, useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";
import Typography from "@/components/common/typography";
import Icon from "@/components/common/icon";
import {
  IDefaultClassName,
  InputProps,
} from "@/components/common/input/InputForm";
import InputIcon from "@/components/common/input/InputIcon";
import lodashDebounce from "lodash/debounce";

const TextInput = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      input,
      icon,
      variant,
      debounce,
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
        wrapper: `w-full`,
        inputGroup: `flex items-center rounded-lg px-4 py-2 gap-2 ${label?.showLabel && "mt-1"}`,
        label: "",
        input: `w-full`,
        icon: "",
      };

      const variantClass = variant === false ? variant : "primary";

      switch (variantClass) {
        case "primary":
          baseClassName.input +=
            " placeholder:text-sh-secondary-100 outline-none border-none bg-sh-secondary-200 text-white";
          baseClassName.inputGroup += " bg-sh-secondary-200 text-white";
          if (icon?.showIcon) baseClassName.icon = "text-white";
          break;
        default:
          break;
      }

      baseClassName.wrapper += ` ${wrapperClassName}`;
      baseClassName.inputGroup += ` ${groupClassName}`;
      baseClassName.label += ` ${label?.className}`;
      baseClassName.input += ` ${input?.className}`;
      baseClassName.icon += ` ${icon?.className}`;

      return baseClassName;
    }, [
      variant,
      icon,
      input?.type,
      wrapperClassName,
      groupClassName,
      label?.className,
    ]);

    const typeProcessor = useMemo(() => {
      if (input.type === "password") {
        return showPassword ? "text" : "password";
      }
      if (input.type === "number") {
        return "text";
      }
      return input?.type || "text";
    }, [input?.type, showPassword]);

    const numberValidation = (value: string): boolean => /^-?\d*$/.test(value);

    const debouncedSearch = React.useRef(
      lodashDebounce(async (e) => {
        if (debounce && debounce?.callback) debounce.callback(e);
      }, debounce?.duration || 300)
    ).current;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (input?.type === "number" && !numberValidation(e.target.value)) return;
      if (input?.onChange) {
        input.onChange(e);
      }
      if (debounce) debouncedSearch(e);
    };

    const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      if (input?.onBlur) {
        input.onBlur(e);
      }
    };

    const onFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      if (input?.onFocus) {
        input.onFocus(e);
      }
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
            {...(field
              ? { ...field }
              : { value: input.value, onChange, onBlur, onFocus, ref })}
          />
          {input?.type === "password" && (
            <Icon
              onClick={() => setShowPassword((prev) => !prev)}
              name={showPassword ? "eyeOff" : "eye"}
              className={twMerge(`h-5 w-5 cursor-pointer ${icon?.className}`)}
            />
          )}
        </span>

        {field && (
          <p
            className={twMerge(
              `mt-1 h-6 transform text-sm text-red-500 transition-all duration-300 ease-in-out`,
              fieldState?.error?.message
                ? "translate-y-0 opacity-100"
                : "-translate-y-5 opacity-0"
            )}
          >
            {fieldState?.error?.message}
          </p>
        )}
      </div>
    );
  }
);

TextInput.displayName = "TextInput";

export default TextInput;
