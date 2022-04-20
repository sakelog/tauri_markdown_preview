import { dialog, path } from '@tauri-apps/api';
import {
  readTextFile,
  writeFile,
} from '@tauri-apps/api/fs';

// ファイルを開く
export const fileOpen = async () => dialog
    .open({
      filters: [{ name: 'Markdown', extensions: ['md'] }],
      directory: false,
      multiple: false,
    })
    .then(async (paths) => {
      if (paths === null) {
        return { status: null };
      }

      try {
        const filePath = Array.isArray(paths)
          ? paths[0]
          : paths;
        const buff = await readTextFile(filePath);
        const title = await path.basename(filePath, '.md');
        return {
          satus: true,
          path: filePath,
          inputTitle: title,
          inputMarkdownBody: buff,
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        return { status: false, message: error.message };
      }
    });

// ファイル保存：共通
const fileSaveCommon = async ({
  name,
  extension,
  data,
}: {
  name: string;
  extension: string;
  data: FileIO.SaveFile;
}) => dialog
    .save({
      defaultPath: data.title,
      filters: [{ name, extensions: [extension] }],
    })
    .then(async (filePath) => {
      if (filePath === null) {
        return { status: null };
      }

      try {
        await writeFile({
          path: filePath,
          contents: data.body,
        });

        const title = await path.basename(
          filePath,
          `.${extension}`
        );

        return {
          status: true,
          filePath,
          outputTitle: title,
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        return { status: false, message: error.message };
      }
    });

// ファイル保存：Markdown
export const fileSaveMd = async (data: FileIO.SaveFile) => {
  const NAME = 'Markdown';
  const EXTENSION = 'md';

  const { status, filePath, outputTitle } =
    await fileSaveCommon({
      name: NAME,
      extension: EXTENSION,
      data,
    });

  return { status, filePath, outputTitle };
};

// ファイル保存：HTML
export const fileSaveHtml = async (
  data: FileIO.SaveFile
) => {
  const NAME = 'Html';
  const EXTENSION = 'html';

  const { status, filePath, outputTitle } =
    await fileSaveCommon({
      name: NAME,
      extension: EXTENSION,
      data,
    });

  return { status, filePath, outputTitle };
};
