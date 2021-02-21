import { useState } from "react";
import { Button, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useSearchContext } from "../../context/searchContext";

export const SearchInput = () => {
  const [inputValue, setInputValue] = useState("");
  const searchContext = useSearchContext();

  const inputChangeHandler = e => {
    setInputValue(e.target.value);
  };

  const performSearch = async () => {
    try {
      const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${inputValue}`
      ).then(res => res.json());

      searchContext.setResults(response);
    } catch (error) {
      // TODO: set error state
      console.log("error", error);
    }
  };

  return (
    <>
      <InputGroup>
        <InputLeftElement children={<SearchIcon />} />
        <Input
          onChange={inputChangeHandler}
          placeholder="search show titles"
          value={inputValue}
        />
      </InputGroup>
      <Button onClick={performSearch}>Search</Button>
    </>
  );
};
