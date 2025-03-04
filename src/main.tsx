import '@mantine/core/styles.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';

import App from './App.tsx';
import { theme } from './theme';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <ModalsProvider>
        {/* <I18nextProvider i18n={i18n}> */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
        {/* </I18nextProvider> */}
      </ModalsProvider>
    </MantineProvider>
  </StrictMode>,
);
