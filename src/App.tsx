import { ChakraProvider, Flex } from "@chakra-ui/react";
import Questions from "./modules/questions";
import Header from "./modules/header";
import Footer from "./modules/footer";
import theme from "./theme";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Flex
      textAlign="center"
      justifyContent="center"
      fontSize="xl"
      style={{ position: "relative", height: "100vh" }}
      className="AppFlex"
    >
      <Flex
        minH="100vh"
        w="xl"
        p={3}
        alignItems="center"
        direction="column"
        justify="space-between"
      >
        <Header />
        <Questions />
        <Footer />
      </Flex>
    </Flex>
  </ChakraProvider>
);
