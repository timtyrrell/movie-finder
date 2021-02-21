import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";

export const SearchResult = ({ movie }) => {
  const { name, image, summary } = movie.show;
  const sanitizedSummary = summary.replace(/<[^>]+>/g, "");
  return (
    <Box>
      <Image src={image?.medium}></Image>
      <Heading>{name}</Heading>
      <Text>{sanitizedSummary}</Text>
      <Button>Show episodes</Button>
    </Box>
  );
};
