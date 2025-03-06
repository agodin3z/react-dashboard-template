import { Flex, Paper, Title } from '@mantine/core';
import { useDocumentTitle } from '@mantine/hooks';

import { SITE_NAME } from '@/config/constants';
import DashboardLayout from '@/layout/dashboard.layout';

const HomePage = () => {
  useDocumentTitle(`Inicio | ${SITE_NAME}`);
  return (
    <DashboardLayout>
      <Flex style={{ height: 'calc(100vh - 32px)' }}>
        <Paper m="auto">
          <Title ta="center">Inicio</Title>
        </Paper>
      </Flex>
    </DashboardLayout>
  );
};

export default HomePage;
