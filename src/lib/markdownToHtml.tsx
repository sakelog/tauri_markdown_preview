import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';

import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';

export const markdownToHtml = (markdown: string) => {
  const convertedHTML = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeHighlight, { ignoreMissing: true })
    .use(rehypeStringify)
    .processSync(markdown)
    .toString();

  return convertedHTML;
};

export const markdownToHtmlDocument = ({
  title,
  markdown,
}: {
  title: string;
  markdown: string;
}) => {
  const convertedHTML = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, { title, language: 'ja' })
    .use(rehypeHighlight, { ignoreMissing: true })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .processSync(markdown)
    .toString();

  return convertedHTML;
};
