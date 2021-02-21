import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";

export const SearchResult = ({ movie }) => {
  const { name, image, summary } = movie.show;
  return (
    <Box>
      <Image src={image.medium}></Image>
      <Heading>{name}</Heading>
      <Text>{summary}</Text>
      <Button>Show episodes</Button>
    </Box>
  );
};
