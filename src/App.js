import {useState} from 'react';
import {
  Box,
  VStack,
  Grid,
  theme,
  ChakraProvider
} from '@chakra-ui/react';

import SearchContext from './context/search-context'
import {Header} from './components/header'
import {Body} from "./components/body";

function App() {

  const [results, setResults] = useState([]);

  return (
    <ChakraProvider theme={theme}>
      <SearchContext.Provider
        value={{
          results,
          setResults,
        }} >
        <Box textAlign="center" fontSize="xl">
          <Grid minH="100vh" p={3}>
            <VStack spacing={8}>
              <Header />
              <Body />
            </VStack>
          </Grid>
        </Box>
      </ SearchContext.Provider>
    </ ChakraProvider>
  );
}

export default App;
