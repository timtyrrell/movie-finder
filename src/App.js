import { useState } from "react";
import { Box, VStack, Grid, theme, ChakraProvider } from "@chakra-ui/react";

import { SearchContextProvider } from "./context/searchContext";

import { Header } from "./components/header";
import { Body } from "./components/body";

function App() {
  const [results, setResults] = useState([]);

  return (
    <ChakraProvider theme={theme}>
      <SearchContextProvider
        contextValue={{
          results,
          setResults,
        }}
      >
        <Box textAlign="center" fontSize="xl">
          <Grid minH="100vh" p={3}>
            <VStack spacing={8}>
              <Header />
              <Body />
            </VStack>
          </Grid>
        </Box>
      </SearchContextProvider>
    </ChakraProvider>
  );
}

export default App;
