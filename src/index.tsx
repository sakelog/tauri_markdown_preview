import React from 'react';
import ReactDOM from 'react-dom/client';
import 'style/global.scss';

import { store } from 'redux/store';
import { Provider } from 'react-redux';

import { ChakraProvider } from '@chakra-ui/react';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { theme } from './theme';

const container = document.getElementById('root');
const root = container && ReactDOM.createRoot(container);

root?.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// eslint-disable-next-line no-console
reportWebVitals(console.log);
