export const useDebounce = <T>(
  functionToDebounce: (param: T) => void,
  delay: number
) => {
  let timeoutId: number | null = null;

  return (args: T) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      functionToDebounce(args);
    }, delay);
  };
};
