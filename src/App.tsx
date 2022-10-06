import * as React from 'react';
import {
  ChakraProvider,
  Box,
  Flex,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Select,
  Button,
  Badge,
  Divider,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import theme from './theme';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Flex textAlign='center' justifyContent='center' fontSize='xl'>
      <Grid minH='100vh' w='xl' p={3}>
        <ColorModeSwitcher justifySelf='flex-end' />
        <VStack spacing={8}>
          <Box borderWidth='1px' borderRadius='lg' overflow='hidden' p='3' boxShadow='dark-lg'>
            What's your favorite way to spend a day off? What's your favorite way to spend a day
            off?
          </Box>
          <Flex
            pos='relative'
            w='100%'
            minH='100px'
            borderRadius='lg'
            overflow='hidden'
            p='3'
            py='26px'
            boxShadow='dark-lg'
            justifyContent='center'
            alignItems='center'
          >
            <Box>What's your favorite way to spend a day off?</Box>
            <Badge pos='absolute' bottom='6px'>
              Likes
            </Badge>
            <Badge>3</Badge>
          </Flex>
          <Button colorScheme='teal' size='lg'>
            Button
          </Button>
          <Select placeholder='Select option'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
          <Select placeholder='Select option'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
          <Text>
            Edit <Code fontSize='xl'>src/App.tsx</Code> and save to reload.
          </Text>
          <Link
            color='teal.500'
            href='https://chakra-ui.com'
            fontSize='2xl'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn Chakra
          </Link>
        </VStack>
      </Grid>
    </Flex>
  </ChakraProvider>
);
