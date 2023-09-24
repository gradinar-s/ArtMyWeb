import { useState, useEffect } from "react";

export const useRequest = (request, dependencies) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await request();
        setData(response);
      } catch (error) {
        setError(`${error} Could not Fetch Data`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [...dependencies]);

  return [data, isLoading, error];
};
