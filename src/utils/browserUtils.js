export const isBrowser = () => {
  if (typeof window !== 'undefined') {
    return true;
  } else {
    return false;
  }
};
