/* eslint no-param-reassign: 0 */
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
  statusOpen: boolean | null;
  statusSave: boolean | null;
  htmlBody: string;
  htmlAll: string;
};

const initialState: ReducerState = {
  title: '',
  markdownBody: '',
  markdownAll: '',
  statusOpen: null,
  statusSave: null,
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
    setStatusOpen: (state, action) => {
      state.statusOpen = action.payload;
    },
    setStatusSave: (state, action) => {
      state.statusSave = action.payload;
    },
  },
});

export const {
  setTitle,
  setMarkdownBody,
  setHtmlBody,
  setHtmlAll,
  setStatusOpen,
  setStatusSave,
} = markdownSlice.actions;

export default markdownSlice.reducer;
