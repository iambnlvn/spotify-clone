"use client";
import useDebounce from "@/hooks/useDebounce";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import qs from "query-string";
import Input from "./Input";

const SearchInput = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState<string>("");

  const debouncedSearchValue = useDebounce<string>(searchValue, 500);
  useEffect(() => {
    const query = {
      title: debouncedSearchValue,
    };

    const url = qs.stringifyUrl({
      url: "/search",
      query,
    });
    router.push(url);
  }, [router, debouncedSearchValue]);

  return (
    <Input
      placeholder="Search for a song"
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
    />
  );
};

export default SearchInput;
