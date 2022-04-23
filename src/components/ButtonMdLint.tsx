import { useState } from 'react';
import loadable from '@loadable/component';

// lib
import { markdownLint } from 'lib/markdownLint';

// redux
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

// component
import { Button, useDisclosure } from '@chakra-ui/react';
import { FiCheck } from 'react-icons/fi';

const ResultLint = loadable(
  () => import('components/ResultLint')
);

// Main
const ButtonMdLint = () => {
  const markdownBody = useSelector<RootState>(
    (state) => state.mainState.markdownBody
  ) as string;

  const [result, setResult] = useState<string>('');

  const handleResult = async () =>
    setResult(await markdownLint(markdownBody));

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={async () => {
          handleResult();
          onOpen();
        }}
        leftIcon={<FiCheck />}
        colorScheme="orange"
      >
        Markdown文法チェック
      </Button>
      <ResultLint
        isOpen={isOpen}
        onClose={onClose}
        result={result}
      />
    </>
  );
};

export default ButtonMdLint;
