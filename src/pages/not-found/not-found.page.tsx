import classes from './not-found.module.css';

import { Link } from 'react-router-dom';
import { Button, Center, Flex, Paper, Title } from '@mantine/core';
import { useDocumentTitle } from '@mantine/hooks';

import { SITE_NAME } from '@/config/constants';
import EmptyLayout from '@/layout/empty.layout';

const NotFound = () => {
  useDocumentTitle(`404 | ${SITE_NAME}`);
  return (
    <EmptyLayout>
      <Flex style={{ height: 'calc(100vh - 32px)' }}>
        <Paper m="auto">
          <Title className={classes.title} ta="center">
            404
          </Title>
          <Title order={2} mt="xl" ta="center">
            Página no encontrada... <br />
            ¡tal vez cayó en un agujero negro!
          </Title>
          <Center mt="xl">
            <Button variant="outline" component={Link} to="/">
              Volver al inicio
            </Button>
          </Center>
        </Paper>
      </Flex>
    </EmptyLayout>
  );
};

export default NotFound;
