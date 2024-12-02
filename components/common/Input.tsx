import React, {forwardRef} from "react";
import {Label} from "@/components/ui/label";

interface Props {
  placeholder: string;
  type?: string;
  name?: string;
  label?: string;
  className?: string;
  value?: string;
  errorMessage?: string; // Add error message prop
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

// Use forwardRef for the input element
const Input = forwardRef<HTMLInputElement, Props>(
    ({placeholder, type = "text", name, label, className, value, errorMessage, onChange}, ref) => {
      return (
          <div>
            {/* Label */}
            {label && (
                <Label
                    htmlFor={name}
                    className="block text-sm font-semibold text-gray-700 mb-1"
                >
                  {label}
                </Label>
            )}

            <input
                ref={ref}
                name={name}
                id={name}
                placeholder={placeholder}
                type={type}
                className={`${className} ${errorMessage ? "border-red-500" : ""}`} // Highlight border on error
                value={value}
                onChange={(e) => {
                  if (onChange) onChange(e);
                }}
            />

            {/* Error Message */}
            {errorMessage && (
                <p className="text-sm text-red-500 mt-1">{errorMessage}</p>
            )}
          </div>
      );
    }
);

// Add display name for debugging purposes
Input.displayName = "Input";

export default Input;