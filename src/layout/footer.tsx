import {
  Flex,
  Spacer,
  Box,
  ButtonGroup,
} from '@chakra-ui/react';

import ButtonFileInput from 'components/ButtonFileOpen';
import ButtonFileSaveAsMd from 'components/ButtonFileSaveAsMd';
import ButtonFileSaveAsHtml from 'components/ButtonFileSaveAsHtml';

const Footer = () => (
  <footer>
    <Flex p={2} bg="gray.600" flexWrap="wrap">
      <Spacer />
      <Box>
        <ButtonGroup>
          <ButtonFileInput />
          <ButtonFileSaveAsMd />
          <ButtonFileSaveAsHtml />
        </ButtonGroup>
      </Box>
    </Flex>
  </footer>
);

export default Footer;
