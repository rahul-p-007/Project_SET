import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { usecreateProduct } from "../store/product";
import ProductCard from "../components/ProductCard";

function Home() {
  const { fetchProducts, products } = usecreateProduct();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log(products);
  return (
    <Container maxW={"container.xl"} py={"12"}>
      <VStack spacing={"8"}>
        <Text
          fontSize={"30"}
          fontWeight={"bold"}
          bgGradient={"linear(to-r, crimson.400, blackAlpha.500)"}
          bgClip={"text"}
          textAlign={"center"}
          color={"white"}
        >
          Create Prouduct
        </Text>
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          spacing={10}
          w={"full"}
        >
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>

        <Text
          fontSize={"xl"}
          textAlign={"center"}
          fontWeight={"bold"}
          color={"gray.500"}
        >
          {products.length > 0 ? (
            ""
          ) : (
            <Link to={"/create"}>
              <Text
                as="span"
                color={"blue.500"}
                _hover={{ textDecoration: "underline" }}
              >
                No Products found 😶 Create a product
              </Text>
            </Link>
          )}
        </Text>
      </VStack>
    </Container>
  );
}

export default Home;
