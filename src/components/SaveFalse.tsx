import { forwardRef } from 'react';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from '@chakra-ui/react';

type PropTypes = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const SaveFalse = forwardRef(
  ({
    props,
    ref,
  }: {
    props: PropTypes;
    ref: React.RefObject<HTMLButtonElement>;
  }) => {
    const { isOpen, onClose } = props;
    return (
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={ref}
        onClose={onClose}
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader>
              保存失敗！
            </AlertDialogHeader>
            <AlertDialogBody>
              ファイルの保存に失敗しました。
              <br />
              確認して再度試してください。
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button
                colorScheme="red"
                ref={ref}
                onClick={onClose}
              >
                OK
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    );
  }
);

export default SaveFalse;
