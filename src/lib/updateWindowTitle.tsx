import { appWindow } from '@tauri-apps/api/window';

export const updateWindowTitle = (title: string) => {
  const APP_TITLE = 'Markdown Preview';

  const newTitle =
    APP_TITLE + (title === '' ? '' : `:${  title}`);
  appWindow.setTitle(newTitle);
};
