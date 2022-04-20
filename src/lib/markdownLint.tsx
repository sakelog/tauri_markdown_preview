import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkPresetLintConsistent from 'remark-preset-lint-consistent';
import remarkPresetLintRecommended from 'remark-preset-lint-recommended';
import remarkStringify from 'remark-stringify';
import { reporter } from 'vfile-reporter';

export const markdownLint = async (markdown: string) => {
  const checkedMarkdown = await unified()
    .use(remarkParse)
    .use(remarkPresetLintConsistent)
    .use(remarkPresetLintRecommended)
    .use(remarkStringify, {})
    .process(markdown);

  const result = reporter(checkedMarkdown);

  console.error(result);

  // return result;
};

export default markdownLint;
