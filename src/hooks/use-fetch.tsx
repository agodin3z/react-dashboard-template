import { useEffect, useState } from 'react';

function useFetchData(fetchFunction: () => Promise<any>) {
  const [data, setData] = useState<any>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isSuccess, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchFunction();
        setData(data.result);
        setSuccess(true);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [isLoading]);

  return { data, isLoading, isSuccess, error };
}

export default function useFetch(fetchFunction: () => Promise<any>) {
  const { data, isLoading, isSuccess, error } = useFetchData(fetchFunction);

  return { data, isLoading, isSuccess, error };
}
