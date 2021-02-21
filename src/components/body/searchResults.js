import {useContext} from 'react';
import {
  Text,
} from '@chakra-ui/react';
import SearchContext from '../../context/search-context'

export const SearchResults = () => {
  const searchContext = useContext(SearchContext);
  return (
    <Text>{searchContext.results}</Text>
  )
}
