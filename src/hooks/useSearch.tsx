import { useMemo } from "react";
import { Item } from "../type";

const useSearch = (
  datas: Item[],
  keyword: string,
  category: string
): Item[] => {
  const searchResults = useMemo(() => {
    return datas.filter((item) => {
      const matchesKeyword =
        item.title.toLowerCase().includes(keyword.toLowerCase()) ||
        item.description.toLowerCase().includes(keyword.toLowerCase());
      const matchesCategory =
        category === "all" ? true : item.category === category;

      return matchesKeyword && matchesCategory;
    });
  }, [datas, keyword, category]);

  return searchResults;
};

export default useSearch;
