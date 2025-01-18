import { useState, useEffect, useCallback } from "react";

/**
 * Options for the `useFetch` hook.
 *
 * @template TBody - The type of the request body.
 * @property {string} [method] - The HTTP method to use for the request, defaults to "GET".
 * @property {Record<string, string>} [headers] - Additional headers to include in the request.
 * @property {TBody} [body] - The request body, will be serialized to JSON.
 * @property {boolean} [skip] - If true, the initial fetch will be skipped.
 */
interface UseFetchOptions<TBody = unknown> {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  headers?: Record<string, string>;
  body?: TBody;
  skip?: boolean;
}

interface UseFetchReturn<T> {
  data: T | null; // Fetched data
  isLoading: boolean; // Loading state
  error: string | null; // Error message, if any
  refetch: () => Promise<void>; // Function to refetch the data
}

export const useFetch = <T, TBody = unknown>(
  url: string,
  options: UseFetchOptions<TBody> = {}
): UseFetchReturn<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    if (options.skip) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(url, {
        method: options.method || "GET",
        headers: {
          "Content-Type": "application/json",
          ...(options.headers || {}),
        },
        body: options.body ? JSON.stringify(options.body) : undefined,
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const result: T = await response.json();
      setData(result);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
    } finally {
      setIsLoading(false);
    }
  }, [url, options]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error, refetch: fetchData };
};
