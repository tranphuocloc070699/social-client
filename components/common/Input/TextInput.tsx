import React, {forwardRef, useMemo, useState} from "react";
import {twMerge} from "tailwind-merge";
import Typography from "@/components/common/Typography";
import Icon from "@/components/common/Icon";
import {IDefaultClassName, Props} from "@/components/common/Input/InputForm";
import InputIcon from "@/components/common/Input/InputIcon";

const TextInput = forwardRef<HTMLInputElement, Props>(
    ({
       label,
       input,
       icon,
       variant,
       groupClassName,
       wrapperClassName,
       validation,
       fieldState,
       field
     }, ref) => {
      const [showPassword, setShowPassword] = useState(false);
      const classNameProcessor = useMemo(() => {
        const classNameProcessor: IDefaultClassName = {
          inputGroup: "flex items-center rounded-lg px-4 py-2 gap-2",
          label: "",
          input: "w-full",
          icon: "",
        };

        const defaultVariant = variant ? variant : "primary";

        switch (defaultVariant) {
          case "primary":
            classNameProcessor.input = classNameProcessor.input.concat(" placeholder:text-sh-secondary-100 outline-none border-none bg-sh-secondary-200 text-white");
            classNameProcessor.inputGroup = classNameProcessor.inputGroup.concat(" bg-sh-secondary-200 text-white");

            if (icon?.showIcon) {
              classNameProcessor.icon = "text-white";
              if (icon?.position === "right" && input?.type !== "password") {
                classNameProcessor.icon = `${classNameProcessor.icon} order-1`;
              }
            }
            break;
          default:
            if (input?.className?.includes("bg")) break;
        }

        return classNameProcessor;
      }, [variant, icon, input?.type]);

      const typeProcessor = useMemo(() => {
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


      return <div className={twMerge(`w-full ${wrapperClassName}`)}>
        {label?.showLabel && (
            <Typography.Label
                className={twMerge(`${label?.className}`)}
            >
              {label?.label}
            </Typography.Label>
        )}
        <span
            className={twMerge(` ${classNameProcessor.inputGroup} ${groupClassName} }`)}>
              <InputIcon defaultClassName={classNameProcessor} icon={icon} validation={validation}
                         fieldState={fieldState}/>
      <input
          placeholder={input.placeholder}
          type={typeProcessor}
          className={twMerge(`${classNameProcessor.input} ${input?.className} `)}
          {...(field ? {...field} : {value: input.value, onChange, ref})}
      />

          {input?.type === "password" &&
							<Icon onClick={() => setShowPassword(prevState => !prevState)}
							      name={showPassword ? "eyeOff" : "eye"}
							      className={twMerge(`h-5 w-5 cursor-pointer ${icon?.className}`)}/>}
            </span>
        {
            validation?.control && <p
								className={twMerge(
                    `text-sm text-red-500 mt-1 transform transition-all duration-300 ease-in-out h-6`,
                    fieldState?.error?.message ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0'
                )}
						>
              {fieldState?.error?.message}
						</p>
        }
      </div>
    })

TextInput.displayName = "Input";

export default TextInput;