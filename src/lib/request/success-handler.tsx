import { IconCheck, IconX } from '@tabler/icons-react';
import type { AxiosResponse } from 'axios';
import { notifications } from '@mantine/notifications';

import responses from './code-messages';

const successHandler = (
  response: Partial<AxiosResponse>,
  options = { notifyOnSuccess: false, notifyOnFailed: true },
) => {
  const { status, data } = response;
  let title = 'Datos obtenidos con éxito';
  const message = data?.message || responses[status!];

  if (data && data.success === true) {
    if (options.notifyOnSuccess) {
      notifications.show({
        title,
        message,
        color: 'success',
        icon: <IconCheck />,
        withBorder: true,
      });
    }
  } else {
    title = `Error ${status}`;
    if (options.notifyOnFailed) {
      notifications.show({
        title,
        message,
        color: 'red',
        icon: <IconX />,
        withBorder: true,
      });
    }
  }
};

export default successHandler;
