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

  if (status !== null) {
    const result = status ? (
      <Alert status="success">
        <AlertIcon />
        <AlertTitle>保存成功</AlertTitle>
      </Alert>
    ) : (
      <Alert status="error">
        <AlertIcon />
        <AlertTitle>保存失敗</AlertTitle>
      </Alert>
    );
    return <Fade in={status !== null}>{result}</Fade>;
  }
  return null;
}

export default SaveFeedback;
