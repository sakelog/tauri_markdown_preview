import { ReactNode } from 'react';
import { Flex, Box } from '@chakra-ui/react';
import Header from './header';

function LayoutBase(props: { children: ReactNode }) {
  return (
    <Flex h="100vh" direction="column">
      <Header />
      <Box flex="1 1 auto" overflow="hidden">
        {props.children}
      </Box>
    </Flex>
  );
}

export default LayoutBase;
