import classes from './login.module.css';

import { useState } from 'react';
import { IconX } from '@tabler/icons-react';
import { Button, Paper, PasswordInput, Text, TextInput, Title } from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
import { useDocumentTitle } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';

import { SITE_NAME } from '@/config/constants';
import EmptyLayout from '@/layout/empty.layout';
import { loginSchema } from '@/lib/validations';
import useSession from '@/store/use-session.store';

// TODO: remove this
const fakeUser = {
  signedIn: true,
  id: 'fake_id',
  email: 'admin@test.com',
  name: 'John',
  surname: 'Doe',
  photo: '',
  password: '12345qwerty',
};

const LoginPage = () => {
  useDocumentTitle(`Iniciar sesión | ${SITE_NAME}`);

  const [loading, setLoading] = useState<boolean>(false);

  const signIn = useSession((state) => state.signIn);

  const form = useForm({
    initialValues: {
      email: 'admin@test.com',
      password: '12345qwerty',
    },
    validate: yupResolver(loginSchema),
  });

  const handleSubmit = async (values: { email: string; password: string }) => {
    setLoading(true);
    try {
      if (values.email !== fakeUser.email) {
        throw new Error('Usuario no existe');
      }

      if (values.password !== fakeUser.password) {
        throw new Error('Contraseña incorrecta');
      }
      signIn({ ...fakeUser });
    } catch (e: any) {
      console.error(e);
      notifications.clean();
      notifications.show({
        title: 'Error al iniciar sesión',
        message: e.message || e.toString(),
        color: 'red',
        icon: <IconX />,
        withBorder: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <EmptyLayout>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Title className={classes.title} ta="center" mt={100}>
          <Text
            inherit
            variant="gradient"
            component="span"
            gradient={{ from: 'pink', to: 'yellow' }}
          >
            Welcome
          </Text>
        </Title>
        <Paper className={classes.form} radius={0} p={30}>
          <TextInput
            {...form.getInputProps('email')}
            name="email"
            label="Correo electrónico"
            withAsterisk
            placeholder="hello@yopmail.com"
            size="md"
          />
          <PasswordInput
            {...form.getInputProps('password')}
            name="password"
            withAsterisk
            label="Contraseña"
            placeholder="your_password"
            mt="md"
            size="md"
          />
          <Button loading={loading} type="submit" fullWidth mt="xl" size="md">
            Iniciar sesión
          </Button>
        </Paper>
      </form>
    </EmptyLayout>
  );
};

export default LoginPage;
