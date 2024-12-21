import { useMemo } from "react";
import { Item } from "../type";

const useSearch = (data: Item[], keyword: string, category: string): Item[] => {
  const searchResults = useMemo(() => {
    return data.filter((item) => {
      const matchesKeyword =
        item.title.toLowerCase().includes(keyword.toLowerCase()) ||
        item.description.toLowerCase().includes(keyword.toLowerCase());
      const matchesCategory =
        category === "all" ? true : item.category === category;

      return matchesKeyword && matchesCategory;
    });
  }, [data, keyword, category]);

  return searchResults;
};

export default useSearch;
