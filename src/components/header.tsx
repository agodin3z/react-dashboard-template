import { IconLogout } from '@tabler/icons-react';
import { Burger, Button, Group, Text, Title } from '@mantine/core';

import useSession from '@/store/use-session.store';
import { ColorSchemeToggle } from './color-scheme-toggle';

export function Header({
  isLoggedIn,
  showBurger = false,
  opened,
  toggle,
}: {
  isLoggedIn: boolean;
  showBurger?: boolean;
  opened?: boolean;
  toggle?: () => void;
}) {
  // TODO: improve sign out
  const signOut = useSession((state) => state.signOut);

  return (
    <Group justify="space-between" h="100%" px="md">
      <Group gap="sm" align="center">
        <Title order={3}>
          <Text
            inherit
            variant="gradient"
            component="span"
            gradient={{ from: 'pink', to: 'yellow' }}
          >
            ACME
          </Text>
        </Title>
        {showBurger && <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />}
      </Group>
      <Group gap="sm" align="center">
        <ColorSchemeToggle />
        {isLoggedIn && (
          <Button variant="primary" onClick={signOut}>
            <IconLogout size={22} stroke={1.5} />
          </Button>
        )}
      </Group>
    </Group>
  );
}
