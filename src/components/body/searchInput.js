import {
  Button,
  Input,
  InputGroup,
  InputLeftElement
} from '@chakra-ui/react';
import {SearchIcon} from '@chakra-ui/icons'

export const SearchInput = () => {
  return (
    <>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon/>}
        />
        <Input placeholder="search show titles" />
      </InputGroup>
      <Button>Search</Button>
    </>
  )
}
