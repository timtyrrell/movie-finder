import React from 'react';

const SearchContext = React.createContext({
  results: [],
  setResults: () => {},
});

SearchContext.displayName = "SearchContext"

export {SearchContext as default};
