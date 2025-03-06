import React from 'react';
import { AppShell } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';

import { Navbar } from '@/app/navigation/navbar';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import useAppContext from '@/context/use-app.context';

function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { isNavMenuClose, collapse } = useAppContext((state) => state);
  const [opened, { toggle }] = useDisclosure();
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <AppShell
      header={{ height: 60 }}
      footer={{ height: 60 }}
      navbar={{
        width: isNavMenuClose ? 85 : 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <AppShell.Header p="sm">
          <Header isLoggedIn showBurger opened={opened} toggle={toggle} />
        </AppShell.Header>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <Navbar opened={!isNavMenuClose} collapse={collapse} isMobile={isMobile} />
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
      <AppShell.Footer p="md">
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
}

export default DashboardLayout;
