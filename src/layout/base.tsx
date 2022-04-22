import { ReactNode } from 'react';
import { Flex, Box } from '@chakra-ui/react';
import Footer from './footer';

const LayoutBase = ({
  children,
}: {
  children: ReactNode;
}) => (
  <Flex h="100vh" direction="column">
    <Box flex="1 1 auto" overflow="hidden">
      {children}
    </Box>
    <Footer />
  </Flex>
);
export default LayoutBase;
