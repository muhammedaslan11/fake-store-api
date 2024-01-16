/* eslint-disable no-unused-vars */
import {
  Box,
  Heading,
  Input,
  Stack,
  Button,
  Flex,
  Spacer,
  Tag,
  SimpleGrid,
  Image,
  Center,
  GridItem,
  Spinner,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom/cjs/react-router-dom";

const StoreItem = ({ title, price, image }) => {
  return (
    <Box p={4} borderRadius="lg" borderWidth="1px">
      <Center>
        <Image src={image} w={24} />
      </Center>
      <Heading mt={4} noOfLines={2} size="sm" fontWeight="normal">
        {title}
      </Heading>
      <Tag mt={4}>${price}</Tag>
    </Box>
  );
};

function Store({}) {
  const [storeItem, setStoreItem] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then(({ data }) => {
      setLoading(false);
      setStoreItem(data);
      setFilteredItems(data);
    });
  }, []);


  //   const itemNameRef = useRef();
  //   const itemPriceRef = useRef();

  return (
    <Box>
      {/* <Stack> */}
      <Header title="Fake Api" />
      {loading ? (
        <Center>
          <Spinner />
        </Center>
      ) : (
        <Box p={2}>
          <Input
            onChange={(e) => {
              let f = storeItem.filter((item) =>
                item.title.toLowerCase().includes(e.target.value.toLowerCase())
              );
              console.log("f", f);
              setFilteredItems(f);
            }}
            placeholder="search"
            mt={4}
          />
          <SimpleGrid columns={4} spacing={4} mt={4} p={2}>
            {filteredItems.map((item) => {
              return (
                <GridItem>
                  <Link to={{
                    pathname:`/product/${item.id}`,
                    state: item,
                  }}>
                    <StoreItem {...item} />
                  </Link>
                </GridItem>
              );
            })}
          </SimpleGrid>
        </Box>
      )}
      {/* </Stack> */}
      {/* <Input ref={itemNameRef} mt={10} placeholder="Item Name" />
      <Input ref={itemPriceRef} mt={10} placeholder="Price" type="number" />
      <Button
      mt="2"
      onClick={() => {
          onItemAdd({
              title: itemNameRef.current.value,
              price: itemPriceRef.current.value,
            });
        }}
        >
        Add Item
      </Button> */}
    </Box>
  );
}
export default Store;
