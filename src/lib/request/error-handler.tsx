import { IconAlertCircle, IconX } from '@tabler/icons-react';
import { AxiosError } from 'axios';
import { notifications } from '@mantine/notifications';

import { navigate } from '../utils';
import responses from './code-messages';

const errorHandler = (error: unknown | AxiosError, notifyOnFailed = true) => {
  let title = 'Error desconocido';
  let message = responses[0];
  let data = { success: false, result: null, message };

  if (error instanceof AxiosError) {
    const { response } = error;

    if (response) {
      if (response.headers['access-token-failed'] === 'true') {
        notifications.show({
          title: 'Sesión Caducada',
          message: 'Por favor, inicie sesión nuevamente',
          color: 'danger',
          icon: <IconAlertCircle />,
          withBorder: true,
        });
        navigate('/logout', { replace: true });
        return;
      }

      const msg = response.data?.detail || response.data?.message;
      const { status } = response;
      title = `Error ${status}`;
      message = msg || responses[status];
      data = response.data;
    }

    if (error instanceof Error) {
      if (error.name === 'CanceledError') {
        return;
      }
      title = `Error: "${error.name}"`;
      message = error.message;
    }
  }

  if (notifyOnFailed) {
    notifications.show({ title, message, color: 'red', icon: <IconX />, withBorder: true });
  }

  return data;
};

export default errorHandler;
