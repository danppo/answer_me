// import * as React from "react";
import { ChakraProvider, Flex, Grid } from "@chakra-ui/react";
// import { ColorModeSwitcher } from "./components/colorSwitcher/ColorModeSwitcher";
import Questions from "./pages/questions";
import Header from "./pages/header";
import Footer from "./pages/footer";
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
