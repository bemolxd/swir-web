import { useEffect } from "react";

export const useDebounce = (
  callback: () => void,
  timeMs = 300,
  args: unknown[] = []
) => {
  useEffect(() => {
    const timeout = setTimeout(callback.bind(null, args), timeMs);

    return () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, args);
};
