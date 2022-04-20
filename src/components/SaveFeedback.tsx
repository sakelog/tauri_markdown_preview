import { ReactNode } from 'react';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  Fade,
} from '@chakra-ui/react';

type PropsType = {
  status: boolean | null;
};

function SaveFeedback(props: PropsType) {
  const { status } = props;

  let result: ReactNode | null;
  if (status === true) {
    result = (
      <Alert status="success">
        <AlertIcon />
        <AlertTitle>保存成功</AlertTitle>
      </Alert>
    );
  }
  if (status === false) {
    result = (
      <Alert status="error">
        <AlertIcon />
        <AlertTitle>保存失敗</AlertTitle>
      </Alert>
    );
  } else {
    result = null;
  }
  return <Fade in={status !== null}>{result}</Fade>;
}

export default SaveFeedback;
