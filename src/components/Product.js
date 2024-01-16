import {
  Box,
  Button,
  Center,
  GridItem,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Tag,
} from "@chakra-ui/react";

const Header = ({ title }) => (
  <Box p={4} shadow="md">
    <Heading>{title}</Heading>
  </Box>
);

function Product({ location }) {
  const { state } = location;

  if (!state) {
    window.location = "/";
  }
  console.log("state", state);
  // console.log("props", props)
  return (
    <Box>
      <Header title={state.title} />
      <Box p={8} d="flex" alignItems="center">
        <Box ml={4}>
          <SimpleGrid spacing={4} columns={{ base: 1, md: 5 }}>
            <GridItem colSpan={2}>
              <Center>
                <Image w={48} src={state.image} />
              </Center>
            </GridItem>
            <GridItem colSpan={3}>
              <Stack spacing={4}>
                <Box>
                  <Heading>Price: ${state.price}</Heading>
                  <Tag mt={2} as="i">{state.category}</Tag>
                </Box>
                <Text>{state.description}</Text>
                <HStack>
                  <Button size="sm" w="xs" colorScheme="purple">
                    Buy Now
                  </Button>
                  <Button size="sm" w="xs">
                    Share Product
                  </Button>
                </HStack>
              </Stack>
            </GridItem>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
}

export default Product;
