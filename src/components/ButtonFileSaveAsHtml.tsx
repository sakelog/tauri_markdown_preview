import { useCallback } from 'react';

import { fileSaveHtml } from 'lib/fileIO';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'redux/store';
import {
  setTitle,
  setHtmlAll,
  setStatusSaveHtml,
} from 'redux/lib/slice';

import { Button } from '@chakra-ui/react';

function ButtonFileSaveAsHtml() {
  const title = useSelector<RootState>(
    (state) => state.mainState.title
  ) as string;
  const htmlAll = useSelector<RootState>(
    (state) => state.mainState.htmlAll
  ) as string;

  const dispatch = useDispatch<AppDispatch>();
  const onHandleSave = useCallback(async () => {
    dispatch(setHtmlAll());
    const { outputTitle, status } = await fileSaveHtml({
      title,
      body: htmlAll,
    });
    dispatch(setStatusSaveHtml(status));
    if (status) {
      dispatch(setTitle(outputTitle));
    }
    setTimeout(() => {
      dispatch(setStatusSaveHtml(null));
    }, 5000);
  }, [htmlAll]);

  return (
    <Button onClick={onHandleSave}>HTMLとして保存</Button>
  );
}

export default ButtonFileSaveAsHtml;
