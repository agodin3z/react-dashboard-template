import { IconUser } from '@tabler/icons-react';
import { Button, Group, Text, Title } from '@mantine/core';

import { ColorSchemeToggle } from './color-scheme-toggle';

export function Header({ isLoggedIn }: { isLoggedIn: boolean }) {
  return (
    <Group justify="space-between" h="100%" px="md">
      <Title order={3}>
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          ACME
        </Text>
      </Title>
      <Group gap="sm" align="center">
        <ColorSchemeToggle />
        {isLoggedIn && (
          <Button variant="light">
            <IconUser size={22} stroke={1.5} />
          </Button>
        )}
      </Group>
    </Group>
  );
}
