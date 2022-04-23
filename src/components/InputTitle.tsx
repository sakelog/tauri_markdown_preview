import { useCallback } from 'react';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'redux/store';
import { setTitle, setHtmlBody } from 'redux/lib/slice';

// component
import { FormLabel, Text, Input } from '@chakra-ui/react';

const InputTitle = () => {
  const title = useSelector<RootState>(
    (state) => state.mainState.title
  ) as string;

  const dispatch = useDispatch<AppDispatch>();
  const onTitleChange = useCallback(
    (value: string) => {
      dispatch(setTitle(value));
      dispatch(setHtmlBody());
    },
    [title]
  );

  return (
    <FormLabel
      htmlFor="markdownTitle"
      display="flex"
      alignItems="center"
      py={4}
      px={2}
      bg="blue.200"
      w="100%"
      h="100%"
    >
      <Text
        flexShrink={0}
        mr={2}
        rounded="2xl"
        bg="black"
        color="white"
        px={2}
        py={1}
      >
        題名
      </Text>
      <Input
        id="markdownTitle"
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
        variant="flushed"
        type="text"
        px={4}
        color="gray.800"
        bg="whiteAlpha.700"
      />
    </FormLabel>
  );
};
export default InputTitle;
