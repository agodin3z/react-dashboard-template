import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@fontsource/inter/index.css';
import '@fontsource/poppins/index.css';
import '@fontsource/ibm-plex-mono/index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';

import App from './App.tsx';
import { theme } from './theme';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <Notifications limit={3} />
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
