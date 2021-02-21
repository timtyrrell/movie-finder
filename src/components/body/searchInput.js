import {useContext, useState} from 'react';
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import {SearchIcon} from '@chakra-ui/icons'
import SearchContext from '../../context/search-context'

export const SearchInput = () => {
  const [inputValue, setInputValue] = useState("");
  const searchContext = useContext(SearchContext);

  const inputChangeHandler = (e) => {
    setInputValue(e.target.value)
  };

  const performSearch = () => {
    console.log(inputValue)
    searchContext.setResults(inputValue)
  };

  return (
    <>
      <InputGroup>
        <InputLeftElement
          children={<SearchIcon />}
        />
        <Input onChange={inputChangeHandler} placeholder="search show titles" value={inputValue} />
      </InputGroup>
      <Button onClick={performSearch}>Search</Button>
    </>
  )
}
