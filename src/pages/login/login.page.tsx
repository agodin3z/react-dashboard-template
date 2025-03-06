import classes from './login.module.css';

import { useState } from 'react';
import * as yup from 'yup';
import { Button, Paper, PasswordInput, Text, TextInput, Title } from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
import { useDocumentTitle } from '@mantine/hooks';

import { SITE_NAME } from '@/config/constants';
import EmptyLayout from '@/layout/empty.layout';

const LoginPage = () => {
  useDocumentTitle(`Iniciar sesión | ${SITE_NAME}`);

  const [loading, setLoading] = useState<boolean>(false);
  const schema = yup.object().shape({
    email: yup.string().required('Por favor, ingresa un correo electrónico').email('Invalid email'),
    password: yup.string().required('Por favor, ingresa una contraseña'),
  });

  const form = useForm({
    initialValues: {
      email: 'admin@test.com',
      password: '12345qwerty',
    },
    validate: yupResolver(schema),
  });

  const handleSubmit = async (values: { email: string; password: string }) => {
    setLoading(true);
    try {
      console.log(values);
    } catch (e) {
      console.log(e);
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
