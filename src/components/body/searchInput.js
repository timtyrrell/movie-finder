import {useState} from 'react';
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement
} from '@chakra-ui/react';
import {SearchIcon} from '@chakra-ui/icons'

export const SearchInput = () => {
  const [inputValue, setInputValue] = useState("");

  const inputChangeHandler = (e) => {
    setInputValue(e.target.value)
  };

  const performSearch = () => {
    console.log(inputValue)
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
