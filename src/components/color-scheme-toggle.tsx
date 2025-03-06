import { useMemo } from 'react';
import { IconMoon, IconSun } from '@tabler/icons-react';
import { ActionIcon, useMantineColorScheme } from '@mantine/core';

export function ColorSchemeToggle() {
  const { toggleColorScheme, colorScheme } = useMantineColorScheme();
  const IconCurrentScheme = useMemo(
    () => (colorScheme === 'dark' ? IconSun : IconMoon),
    [colorScheme],
  );

  return (
    <ActionIcon
      onClick={toggleColorScheme}
      size="lg"
      variant="light"
      aria-label="Toggle color scheme"
    >
      <IconCurrentScheme size={22} stroke={1.5} />
    </ActionIcon>
  );
}
