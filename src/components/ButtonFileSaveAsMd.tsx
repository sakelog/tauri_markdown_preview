import { useCallback, useEffect, useRef } from 'react';
import loadable from '@loadable/component';

// lib
import { fileSaveMd } from 'lib/fileIO';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'redux/store';
import { setTitle, setStatusSave } from 'redux/lib/slice';

// component
import { Button, useDisclosure } from '@chakra-ui/react';
import { FaMarkdown } from 'react-icons/fa';

const SaveFalse = loadable(
  () => import('components/SaveFalse')
);

// Main
const ButtonFileSaveAsMd = () => {
  // redux__state
  const title = useSelector<RootState>(
    (state) => state.mainState.title
  ) as string;
  const markdownBody = useSelector<RootState>(
    (state) => state.mainState.markdownBody
  ) as string;
  const statusSave = useSelector<RootState>(
    (state) => state.mainState.statusSave
  ) as boolean | null;

  // redux__dispatch
  const dispatch = useDispatch<AppDispatch>();
  const onHandleSave = useCallback(async () => {
    const { outputTitle, status } = await fileSaveMd({
      title,
      body: markdownBody,
    });
    dispatch(setStatusSave(status));
    if (status) {
      dispatch(setTitle(outputTitle));
    }
    setTimeout(() => {
      dispatch(setStatusSave(null));
    }, 5000);
  }, [title, markdownBody]);

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
        leftIcon={<FaMarkdown />}
      >
        Markdownとして保存
      </Button>
      <SaveFalse
        props={{ isOpen, onOpen, onClose }}
        ref={cancelRef}
      />
    </>
  );
};

export default ButtonFileSaveAsMd;
