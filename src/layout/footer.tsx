import {
  Flex,
  Spacer,
  // Box,
  ButtonGroup,
} from '@chakra-ui/react';

import ButtonFileInput from 'components/ButtonFileOpen';
import ButtonMdLint from 'components/ButtonMdLint';
import ButtonFileSaveAsMd from 'components/ButtonFileSaveAsMd';
import ButtonFileSaveAsHtml from 'components/ButtonFileSaveAsHtml';

const Footer = () => (
  <footer>
    <Flex p={2} bg="gray.600" overflow="hidden">
      <Spacer />
      <ButtonGroup flexWrap="wrap" gap={1}>
        <ButtonFileInput />
        <ButtonMdLint />
        <ButtonFileSaveAsMd />
        <ButtonFileSaveAsHtml />
      </ButtonGroup>
    </Flex>
  </footer>
);

export default Footer;
