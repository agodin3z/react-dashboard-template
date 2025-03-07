import { useState } from 'react';

export default function useOnFetch() {
  const [result, setResult] = useState<any>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onFetch = async (fetchingFn: () => Promise<any>) => {
    setIsLoading(true);

    const data = await fetchingFn();
    setResult(data.result);
    if (data.success === true) {
      setIsSuccess(true);
    } else {
      setIsSuccess(false);
    }

    setIsLoading(false);
  };

  return { onFetch, result, isSuccess, isLoading };
}
