// import * as React from "react";
import { ChakraProvider, Flex, Grid } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Questions from "./pages/questions";
import theme from "./theme";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Flex textAlign="center" justifyContent="center" fontSize="xl">
      <Grid minH="100vh" w="xl" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <Questions />
      </Grid>
    </Flex>
  </ChakraProvider>
);
