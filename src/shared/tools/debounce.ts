export const debounce = (callback: (...args: any[]) => void, wait: number) => {
    let timeoutId: number | null = null;
    return (...args: any[]) => {
      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }
      timeoutId = window.setTimeout(() => {
        callback(...args);
      }, wait);
    };
  }