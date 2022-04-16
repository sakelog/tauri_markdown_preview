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
  statusSaveMd: boolean | null;
  statusSaveHtml: boolean | null;
  htmlBody: string;
  htmlAll: string;
};

const initialState: ReducerState = {
  title: '',
  markdownBody: '',
  markdownAll: '',
  statusSaveMd: null,
  statusSaveHtml: null,
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
    setStatusSaveMd: (state, action) => {
      state.statusSaveMd = action.payload;
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
    setStatusSaveHtml: (state, action) => {
      state.statusSaveHtml = action.payload;
    },
  },
});

export const {
  setTitle,
  setMarkdownBody,
  setStatusSaveMd,
  setHtmlBody,
  setHtmlAll,
  setStatusSaveHtml,
} = markdownSlice.actions;

export default markdownSlice.reducer;
