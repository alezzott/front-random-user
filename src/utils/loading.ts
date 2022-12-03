export function getLoadTime({ isLoading, setIsLoading }: any) {
  if (isLoading) {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }
}
