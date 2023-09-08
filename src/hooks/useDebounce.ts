import { useEffect, useState } from "react";
import { Axios } from "../api/AxiosClient";
import { TermsType } from "../constants/@type/termsType";
import { KOREAN_REGEX } from "../constants/regex";
import { localCache } from "../utils/LocalCache";

const useDebounce = (value: string, delay: number) => {
  const [debounceValue, setDebounceValue] = useState<string>(value);
  const [data, setData] = useState<TermsType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!value.trim()) {
      setDebounceValue(value);
    } else {
      const timer = setTimeout(() => {
        setDebounceValue(value);
      }, delay);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [value]);

  useEffect(() => {
    if (!KOREAN_REGEX.test(debounceValue)) return;

    const fetchData = async () => {
      setIsLoading(true);

      let tempData = localCache.get(debounceValue);

      if (!tempData && debounceValue) {
        tempData = await Axios.search(debounceValue);
        localCache.set(debounceValue, tempData);
      }

      setData(tempData);
      setIsLoading(false);
    };

    fetchData();
  }, [debounceValue]);

  return { data, isLoading };
};

export default useDebounce;
