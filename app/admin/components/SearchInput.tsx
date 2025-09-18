"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useDebouncedCallback } from 'use-debounce';

interface SearchInputProps {
  placeholder: string;
  selectedModel: string;
}

export function SearchInput({ placeholder, selectedModel }: SearchInputProps) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("query") || "");

  // Debounce the URL update to avoid flooding the server with requests.
  // The search will only trigger after the user stops typing for 300ms.
  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    params.set("model", selectedModel);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <input
      type="text"
      placeholder={placeholder}
      className="flex-grow p-3 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 transition-colors"
      onChange={(e) => {
        setSearchTerm(e.target.value);
        handleSearch(e.target.value);
      }}
      defaultValue={searchTerm}
    />
  );
}
