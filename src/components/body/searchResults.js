import { Text } from "@chakra-ui/react";
import { useSearchContext } from "../../context/searchContext";

export const SearchResults = () => {
  const searchContext = useSearchContext();
  return (
    <>
      <Text>{searchContext.results}</Text>
    </>
  );
};
