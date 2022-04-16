import { createSlice } from '@reduxjs/toolkit';
import {
  markdownToHtml,
  markdownToHtmlDocument,
} from 'lib/markdownToHtml';

// マークダウンを結合する
const concatMarkdown = ({
  title,
  markdownBody,
}: {
  title: string;
  markdownBody: string;
}) =>
  title === '' && markdownBody === ''
    ? ''
    : `${
        title === '' ? '' : `# ${title}`
      }\n\n${markdownBody}`;

type ReducerState = {
  title: string;
  markdownBody: string;
  markdownAll: string;
  htmlBody: string;
  htmlAll: string;
};

const initialState: ReducerState = {
  title: '',
  markdownBody: '',
  markdownAll: '',
  htmlBody: '',
  htmlAll: '',
};

export const markdownSlice = createSlice({
  name: 'markdownSlice',
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setMarkdownBody: (state, action) => {
      state.markdownBody = action.payload;
    },
    setHtmlBody: (state) => {
      state.htmlBody = markdownToHtml(
        concatMarkdown({
          title: state.title,
          markdownBody: state.markdownBody,
        })
      );
    },
    setHtmlAll: (state) => {
      state.htmlAll = markdownToHtmlDocument({
        title: state.title,
        markdown: concatMarkdown({
          title: state.title,
          markdownBody: state.markdownBody,
        }),
      });
    },
  },
});

export const {
  setTitle,
  setMarkdownBody,
  setHtmlBody,
  setHtmlAll,
} = markdownSlice.actions;

export default markdownSlice.reducer;
