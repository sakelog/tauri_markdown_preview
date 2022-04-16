import { useCallback } from 'react';

import { fileSaveMd } from 'lib/fileIO';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'redux/store';
import { setTitle, setStatusSaveMd } from 'redux/lib/slice';

import { Button } from '@chakra-ui/react';

function ButtonFileSaveAsMd() {
  const title = useSelector<RootState>(
    (state) => state.mainState.title
  ) as string;
  const markdownBody = useSelector<RootState>(
    (state) => state.mainState.markdownBody
  ) as string;

  const dispatch = useDispatch<AppDispatch>();
  const onHandleSave = useCallback(async () => {
    const { outputTitle, status } = await fileSaveMd({
      title,
      body: markdownBody,
    });
    dispatch(setStatusSaveMd(status));
    if (status) {
      dispatch(setTitle(outputTitle));
    }
    setTimeout(() => {
      dispatch(setStatusSaveMd(null));
    }, 5000);
  }, [markdownBody]);

  return (
    <Button onClick={onHandleSave}>
      Markdownとして保存
    </Button>
  );
}

export default ButtonFileSaveAsMd;
