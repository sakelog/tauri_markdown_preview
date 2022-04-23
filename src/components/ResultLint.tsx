// component
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

// Main
type PropTypes = {
  isOpen: boolean;
  onClose: () => void;
  result: string;
};

const ResultLint = (props: PropTypes) => {
  const { isOpen, onClose, result } = props;
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>文法チェック結果</ModalHeader>
        <ModalCloseButton />
        <ModalBody
          dangerouslySetInnerHTML={{ __html: result }}
          style={{ whiteSpace: 'pre-wrap' }}
        />
      </ModalContent>
    </Modal>
  );
};
export default ResultLint;
