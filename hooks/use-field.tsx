import { useState, useCallback } from "react";

type UpdateData<T> = (
  updates: Partial<T> | ((prevFields: T) => Partial<T>)
) => void;

type UseFieldArray<T> = {
  fields: T;
  updateFields: UpdateData<T>;
  resetFields: () => void;
  addAtFirst: (item: T extends Array<infer U> ? U : never) => void;
  removeAtFirst: () => void;
  addAtLast: (item: T extends Array<infer U> ? U : never) => void;
  removeAtLast: () => void;
  addAtIndex: (
    index: number,
    item: T extends Array<infer U> ? U : never
  ) => void;
  removeAtIndex: (index: number) => void;
};

type UseFieldObject<T> = {
  fields: T;
  updateFields: UpdateData<T>;
  resetFields: () => void;
};

function useField<T extends Array<any>>(initialState: T): UseFieldArray<T>;
function useField<T>(initialState: T): UseFieldObject<T>;
function useField<T>(initialState?: T) {
  const [fields, setFields] = useState<T>(initialState);

  const updateFields: UpdateData<T> = useCallback(
    (data) => {
      if (
        typeof fields === "object" &&
        fields !== null &&
        !Array.isArray(fields)
      ) {
        setFields((prevFields) => ({
          ...prevFields,
          ...data,
        }));
      } else {
        setFields(data as any);
      }
    },
    [fields]
  );

  const resetFields = useCallback(() => {
    setFields(initialState);
  }, [initialState]);

  // Array-specific functions
  if (Array.isArray(fields)) {
    const addAtFirst = (item: T extends Array<infer U> ? U : never) => {
      setFields((prevFields) => {
        if (Array.isArray(prevFields)) {
          return [item, ...(prevFields || [])] as T;
        }
      });
    };

    const removeAtFirst = () => {
      setFields((prevFields) => {
        if (Array.isArray(prevFields)) {
          return (prevFields || []).slice(1) as T;
        }
      });
    };

    const addAtLast = (item: T extends Array<infer U> ? U : never) => {
      setFields((prevFields) => {
        if (Array.isArray(prevFields)) {
          return [...(prevFields || []), item] as T;
        }
      });
    };

    const removeAtLast = () => {
      setFields((prevFields) => {
        if (Array.isArray(prevFields)) {
          return (prevFields || []).slice(0, -1) as T;
        }
      });
    };

    const addAtIndex = (
      index: number,
      item: T extends Array<infer U> ? U : never
    ) => {
      setFields((prevFields) => {
        if (Array.isArray(prevFields)) {
          const newFields = [...(prevFields || [])];
          newFields.splice(index, 0, item);
          return newFields as T;
        }
      });
    };

    const removeAtIndex = (index: number) => {
      setFields((prevFields) => {
        if (Array.isArray(prevFields)) {
          const newFields = [...(prevFields || [])];
          newFields.splice(index, 1);
          return newFields as T;
        }
      });
    };

    return {
      fields,
      updateFields,
      resetFields,
      addAtFirst,
      removeAtFirst,
      addAtLast,
      removeAtLast,
      addAtIndex,
      removeAtIndex,
    };
  }

  return { fields, updateFields, resetFields };
}

export default useField;
