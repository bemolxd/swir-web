import { useState } from "react";

export const useLocalStorage = <Value = string>(
  key: string,
  defaultValue: Value
) => {
  const [storedValue, setStoredValue] = useState<Value>(() => {
    try {
      const localValue = localStorage.getItem(key);

      if (localValue) return JSON.parse(localValue);

      localStorage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue;
    } catch {
      return defaultValue;
    }
  });

  const setValue = (newValue: Value) => {
    try {
      localStorage.setItem(key, JSON.stringify(newValue));
    } catch {
      setStoredValue(newValue);
    }
  };

  return [storedValue, setValue] as const;
};
