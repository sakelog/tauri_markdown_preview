import {
  Flex,
  Spacer,
  Box,
  Heading,
  ButtonGroup,
} from '@chakra-ui/react';

import ButtonFileInput from 'components/ButtonFileOpen';

function Header() {
  return (
    <header>
      <Flex p={2} bg="blue.50" flexWrap="wrap">
        <Box>
          <Heading>Markdown Preview</Heading>
        </Box>
        <Spacer />
        <Box>
          <ButtonGroup>
            <ButtonFileInput />
          </ButtonGroup>
        </Box>
      </Flex>
    </header>
  );
}

export default Header;
