import {
  Alert,
  AlertIcon,
  AlertTitle,
  Fade,
} from '@chakra-ui/react';

type PropsType = {
  status: boolean | null;
};

const SaveFeedback = (props: PropsType) => {
  const result =
    props.status === true ? (
      <Alert status="success">
        <AlertIcon />
        <AlertTitle>保存成功</AlertTitle>
      </Alert>
    ) : props.status === false ? (
      <Alert status="error">
        <AlertIcon />
        <AlertTitle>保存失敗</AlertTitle>
      </Alert>
    ) : (
      ''
    );
  return (
    <Fade in={props.status === null ? false : true}>
      {result}
    </Fade>
  );
};

export default SaveFeedback;
