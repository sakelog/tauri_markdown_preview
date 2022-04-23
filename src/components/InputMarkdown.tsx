import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'redux/store';
import {
  setMarkdownBody,
  setHtmlBody,
} from 'redux/lib/slice';

// import { markdownLint } from 'lib/markdownLint';

import { Textarea } from '@chakra-ui/react';

const InputMarkdown = () => {
  const markdownBody = useSelector<RootState>(
    (state) => state.mainState.markdownBody
  ) as string;
  const dispatch = useDispatch<AppDispatch>();
  const onMarkdownChange = useCallback(
    (value: string) => {
      dispatch(setMarkdownBody(value));
      dispatch(setHtmlBody());
    },
    [markdownBody]
  );

  return (
    <Textarea
      id="markdownInput"
      value={markdownBody}
      onChange={(e) => onMarkdownChange(e.target.value)}
      resize="none"
      overflowY="scroll"
      h="100%"
      spellCheck={false}
      variant="filled"
      rounded="none"
      placeholder="マークダウン形式で入力"
    />
  );
};

export default InputMarkdown;
