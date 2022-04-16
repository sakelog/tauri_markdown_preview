import { useCallback } from 'react';

import { useDispatch } from 'react-redux';
import { AppDispatch } from 'redux/store';
import {
  setHtmlBody,
  setMarkdownBody,
  setTitle,
} from 'redux/lib/slice';
import { fileOpen } from 'lib/fileIO';

import { Button } from '@chakra-ui/react';

function ButtonFileOpen() {
  const dispatch = useDispatch<AppDispatch>();
  const onHandleInput = useCallback(async () => {
    const { inputTitle, inputMarkdownBody } =
      await fileOpen();
    if (inputTitle && inputMarkdownBody) {
      dispatch(setTitle(inputTitle));
      dispatch(setMarkdownBody(inputMarkdownBody));
      dispatch(setHtmlBody());
    }
  }, []);
  return (
    <Button onClick={onHandleInput}>ファイルを開く</Button>
  );
}

export default ButtonFileOpen;
