export const isBrowser = () => {
  if (typeof window !== 'undefined') {
    console.log('yes window');
    return true;
  } else {
    console.log('no window');
    return false;
  }
};
