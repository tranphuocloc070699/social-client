import React, { ComponentPropsWithoutRef, forwardRef } from "react";
import { icons } from "@/components/common/Icon";
import {
  Controller,
  ControllerFieldState,
  ControllerProps,
  ControllerRenderProps,
  FieldPath,
  FieldValues,
} from "react-hook-form";
import TextInput from "@/components/common/Input/TextInput";

export interface LabelProps {
  showLabel?: boolean;
  label?: string;
  className?: string;
}

export interface IconProps {
  name: keyof typeof icons | string;
  showIcon?: boolean;
  className?: string;
}

export interface InputProps {
  type?: string;
  placeholder: string;
  value?: string;
  name: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

type TextInputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Pick<ControllerProps<TFieldValues, TName>, "name" | "control"> &
  ComponentPropsWithoutRef<"input">;

export interface ValidationProps {
  control?: any;

  showWarningIcon?: boolean;
  errors?: any;
}

export interface Props {
  label?: LabelProps;
  icon?: IconProps;
  input: InputProps;
  validation?: ValidationProps;
  groupClassName?: string;
  wrapperClassName?: string;
  variant?: "primary" | "secondary" | false;
  fieldState?: ControllerFieldState;
  field?: ControllerRenderProps<FieldValues, string>;
}

export interface InputIconProps {
  fieldState?: ControllerFieldState;
  validation?: ValidationProps;
  icon?: IconProps;
  defaultClassName: IDefaultClassName;
}

export interface IDefaultClassName {
  inputGroup: string;
  label: string;
  input: string;
  icon: string;
  wrapper: string;
}

const InputForm = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return (
    <>
      {props?.validation?.control ? (
        <Controller
          name={props?.input.name}
          control={props?.validation?.control}
          render={({ field, fieldState }) => (
            <TextInput {...props} fieldState={fieldState} field={field} />
          )}
        />
      ) : (
        <TextInput {...props} ref={ref} />
      )}
    </>
  );
});
InputForm.displayName = "InputForm";
export default InputForm;
