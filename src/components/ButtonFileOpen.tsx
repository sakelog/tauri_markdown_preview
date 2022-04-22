import { useCallback } from 'react';

// lib
import { fileOpen } from 'lib/fileIO';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'redux/store';
import {
  setHtmlBody,
  setMarkdownBody,
  setTitle,
  setStatusOpen,
} from 'redux/lib/slice';

// component
import { Button } from '@chakra-ui/react';

// Main
const ButtonFileOpen = () => {
  const statusOpen = useSelector<RootState>(
    (state) => state.mainState.statusOpen
  ) as boolean | null;

  const dispatch = useDispatch<AppDispatch>();
  const onHandleInput = useCallback(async () => {
    const { inputTitle, inputMarkdownBody, status } =
      await fileOpen();
    dispatch(setStatusOpen(status));
    if (inputTitle || inputMarkdownBody) {
      dispatch(setTitle(inputTitle));
      dispatch(setMarkdownBody(inputMarkdownBody));
      dispatch(setHtmlBody());
    }
  }, []);
  return (
    <Button
      onClick={onHandleInput}
      disabled={statusOpen ?? false}
    >
      ファイルを開く
    </Button>
  );
};

export default ButtonFileOpen;
