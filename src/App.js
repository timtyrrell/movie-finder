import {
  Box,
  VStack,
  Grid,
  theme,
  ChakraProvider
} from '@chakra-ui/react';

import {Header} from './components/header'
import {Body} from "./components/body";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <VStack spacing={8}>
            <Header />
            <Body />
          </VStack>
        </Grid>
      </Box>
    </ ChakraProvider>
  );
}

export default App;
