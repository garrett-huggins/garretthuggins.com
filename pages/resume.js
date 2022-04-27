import Layout from "../components/Layout";
import { Container, Box, Button } from "@chakra-ui/react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
/* Reference: https://cortezd334.medium.com/add-a-pdf-to-your-react-app-in-3-easy-steps-4a1d2cbf0ec9 */

export default function Resume() {
  return (
    <Layout title="Garrett Huggins | Resume">
      <Container maxW="644px" mt={5}>
        <Box overflow="auto" maxW="100%">
          <Document
            file="Garrett-Huggins-Resume.pdf"
            style={{ width: "100vw", height: "auto" }}
          >
            <Page pageNumber={1} />
          </Document>
        </Box>
        <a href="/Garrett-Huggins-Resume.pdf" download>
          <Button w="100%" p={9} fontSize={{ base: "2rem", sm: "3rem" }}>
            Download Resume
          </Button>
        </a>
      </Container>
    </Layout>
  );
}
