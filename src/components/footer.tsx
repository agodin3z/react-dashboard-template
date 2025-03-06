import { IconCoffee, IconHeart } from '@tabler/icons-react';
import { Group, Text } from '@mantine/core';

export function Footer() {
  return (
    <Group justify="center" gap="sm">
      <Text size="sm" ta="center" component="span">
        Made with
      </Text>
      <IconHeart size={14} stroke={1.5} />
      <Text size="sm" ta="center" component="span">
        &amp;
      </Text>
      <IconCoffee size={14} stroke={1.5} />
    </Group>
  );
}
