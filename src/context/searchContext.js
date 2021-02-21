import { createContext, useContext } from "react";

const SearchContext = createContext({
  results: [],
  setResults: () => {},
});

SearchContext.displayName = "SearchContext";

export const SearchContextProvider = ({ children, contextValue }) => {
  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  return useContext(SearchContext);
};
