import Layout from "../components/Layout";
import { Container, Box, Button } from "@chakra-ui/react";
import ResumePage from "../components/Resume/Resume";

export default function Resume() {
  const print = () => {
    window.print();
  };

  return (
    <Layout title="Garrett Huggins | Resume">
      <Container
        maxW="960px"
        p={0}
        sx={{
          "@media print": {
            marginTop: "-100px",
          },
        }}
      >
        <ResumePage />
        <Button
          w="100%"
          p={{ base: 2, xs: 9 }}
          fontSize={{ base: "1rem", xs: "2rem" }}
          onClick={print}
          sx={{
            "@media print": {
              display: "none",
            },
          }}
        >
          Print Resume
        </Button>
      </Container>
    </Layout>
  );
}
