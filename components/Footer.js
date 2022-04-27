import NextLink from "next/link";
import {
  Container,
  Box,
  useColorModeValue,
  Grid,
  Text,
  GridItem,
  Image,
} from "@chakra-ui/react";
import { FaRegCopyright, FaCodeBranch } from "react-icons/fa";

const Footer = () => {
  const featherImg = `/feather${useColorModeValue("", "dark")}.png`;

  return (
    <Container position="absolute" maxW="100%" bottom="0" p={2}>
      <Box
        padding={{ base: "0 10px", sm: "0 20px" }}
        borderRadius="lg"
        bg={useColorModeValue("#aec2d1", "#2a3947")}
        fontSize={{ base: "10px", xs: "15px", sm: "1rem", md: "1.5rem" }}
      >
        <Grid templateColumns="repeat(3, 1fr)" padding={0} margin={0}>
          <GridItem
            w="100%"
            colSpan={1}
            display="flex"
            alignItems="center"
            justifyContent="left"
          >
            <Text display="flex" alignItems="center" lineHeight={1}>
              <FaRegCopyright />
              Garrett Huggins 2022
            </Text>
          </GridItem>
          <GridItem
            w="100%"
            colSpan={1}
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize="1.5rem"
          >
            <NextLink
              href="https://github.com/garrett-huggins/garretthuggins.com"
              target="_blank"
            >
              <a target="_blank">
                <FaCodeBranch />
              </a>
            </NextLink>
          </GridItem>
          <GridItem
            w="100%"
            colSpan={1}
            display="flex"
            alignItems="center"
            justifyContent="right"
          >
            <Image
              width={{ base: "2rem", sm: "3rem" }}
              height={{ base: "2rem", sm: "3rem" }}
              src={featherImg}
              alt="Logo"
            />
          </GridItem>
        </Grid>
      </Box>
    </Container>
  );
};

export default Footer;
