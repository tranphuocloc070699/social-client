import { useState, useCallback } from "react";

type UpdateData<T> = (updates: Partial<T>) => void;

function useCustomState<T>(initialState?: T) {
  const [fields, setFields] = useState<T>(initialState);

  const updateFields: UpdateData<T> = useCallback(
    (updates) => {
      if (
        typeof fields === "object" &&
        fields !== null &&
        !Array.isArray(fields)
      ) {
        setFields((prevFields) => ({
          ...prevFields,
          ...updates,
        }));
      } else {
        setFields(updates as any);
      }
    },
    [fields]
  );

  const resetFields: UpdateData<T> = useCallback(() => {
    setFields(initialState);
  }, [initialState]);

  return [fields, updateFields, resetFields];
}

export default useCustomState;
