import { useSearchContext } from "../../context/searchContext";
import { SearchResult } from "./searchResult";

export const SearchResults = () => {
  const searchContext = useSearchContext();

  const renderResults = () => {
    if (searchContext.results.length === 0) return [];
    return searchContext.results.map(movie => <SearchResult movie={movie} />);
  };

  return <>{renderResults()}</>;
};
