import { Box, Center, Heading } from '@chakra-ui/react';

const PreviewHeader = () => (
  <Box h="100%" bg="gray.100" color="gray.800">
    <Center h="inherit">
      <Heading fontSize="xl" fontStyle="italic">
        Preview
      </Heading>
    </Center>
  </Box>
);

export default PreviewHeader;
