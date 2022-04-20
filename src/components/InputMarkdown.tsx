import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'redux/store';
import {
  setMarkdownBody,
  setTitle,
  setHtmlBody,
} from 'redux/lib/slice';

import {
  Flex,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Textarea,
  Box,
} from '@chakra-ui/react';
import ButtonFileSaveAsMd from 'components/ButtonFileSaveAsMd';
import SaveFeedback from 'components/SaveFeedback';

function InputMarkdown() {
  const title = useSelector<RootState>(
    (state) => state.mainState.title
  ) as string;
  const markdownBody = useSelector<RootState>(
    (state) => state.mainState.markdownBody
  ) as string;
  const statusSaveMd = useSelector<RootState>(
    (state) => state.mainState.statusSaveMd
  ) as boolean;

  const dispatch = useDispatch<AppDispatch>();
  const onTitleChange = useCallback(
    (value: string) => {
      dispatch(setTitle(value));
      dispatch(setHtmlBody());
    },
    [title]
  );
  const onMarkdownChange = useCallback(
    (value: string) => {
      dispatch(setMarkdownBody(value));
      dispatch(setHtmlBody());
    },
    [markdownBody]
  );

  return (
    <Flex direction="column" h="100%">
      <FormControl pb={4}>
        <FormLabel htmlFor="markdownTitle">題名</FormLabel>
        <Input
          id="markdownTitle"
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
          variant="filled"
          type="text"
        />
        <FormHelperText>文章の題名を入力</FormHelperText>
      </FormControl>
      <FormControl flex="1" display="flex" flexDir="column">
        <FormLabel htmlFor="markdownBody">本文</FormLabel>
        <Textarea
          id="markdownBody"
          value={markdownBody}
          onChange={(e) => onMarkdownChange(e.target.value)}
          variant="filled"
          resize="none"
          overflowY="scroll"
          flex="1"
          spellCheck={false}
        />
        <FormHelperText>
          本文をマークダウン形式で入力
        </FormHelperText>
      </FormControl>
      <Flex
        pt={4}
        alignItems="center"
        justifyContent="space-between"
        h={10}
        flexWrap={{ base: 'wrap', md: 'nowrap' }}
      >
        <ButtonFileSaveAsMd />
        <Box>
          <SaveFeedback status={statusSaveMd} />
        </Box>
      </Flex>
    </Flex>
  );
}

export default InputMarkdown;
