import { Flex, Spacer } from '@chakra-ui/react';

import ButtonFileInput from 'components/ButtonFileOpen';
import ButtonMdLint from 'components/ButtonMdLint';
import ButtonFileSaveAsMd from 'components/ButtonFileSaveAsMd';
import ButtonFileSaveAsHtml from 'components/ButtonFileSaveAsHtml';

const Footer = () => (
  <footer>
    <Flex p={2} bg="gray.600" overflow="hidden">
      <Spacer />
      <Flex flexWrap="wrap" gap={2}>
        <ButtonFileInput />
        <ButtonMdLint />
        <ButtonFileSaveAsMd />
        <ButtonFileSaveAsHtml />
      </Flex>
      <Spacer />
    </Flex>
  </footer>
);

export default Footer;
