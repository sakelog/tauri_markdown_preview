import { useCallback, useEffect, useRef } from 'react';
import loadable from '@loadable/component';

// lib
import { fileSaveHtml } from 'lib/fileIO';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'redux/store';
import {
  setTitle,
  setHtmlAll,
  setStatusSave,
} from 'redux/lib/slice';

// component
import { Button, useDisclosure } from '@chakra-ui/react';
import { FaHtml5 } from 'react-icons/fa';

const SaveFalse = loadable(
  () => import('components/SaveFalse')
);

// Main
const ButtonFileSaveAsHtml = () => {
  const title = useSelector<RootState>(
    (state) => state.mainState.title
  ) as string;
  const htmlAll = useSelector<RootState>(
    (state) => state.mainState.htmlAll
  ) as string;
  const statusSave = useSelector<RootState>(
    (state) => state.mainState.statusSave
  ) as boolean | null;

  const dispatch = useDispatch<AppDispatch>();
  const onHandleSave = useCallback(async () => {
    dispatch(setHtmlAll());
    const { outputTitle, status } = await fileSaveHtml({
      title,
      body: htmlAll,
    });
    dispatch(setStatusSave(status));
    if (status) {
      dispatch(setTitle(outputTitle));
    }
    setTimeout(() => {
      dispatch(setStatusSave(null));
    }, 5000);
  }, [htmlAll]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (statusSave === false) {
      onOpen();
    }
  }, []);

  return (
    <>
      <Button
        onClick={onHandleSave}
        disabled={statusSave ?? false}
        leftIcon={<FaHtml5 />}
      >
        HTMLとして保存
      </Button>
      <SaveFalse
        props={{ isOpen, onOpen, onClose }}
        ref={cancelRef}
      />
    </>
  );
};

export default ButtonFileSaveAsHtml;
