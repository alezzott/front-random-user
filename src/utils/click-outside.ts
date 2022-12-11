import { useEffect } from 'react';

export function useClickOutside({ ref, callback }: any) {
  const handleClick = (event: any) => {
    if (!ref.current) {
      return;
    }

    if (ref.current.contains(event.target)) {
      return;
    }

    callback();
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [ref]);
}
