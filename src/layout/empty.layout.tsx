import React from 'react';
import { AppShell } from '@mantine/core';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import useSession from '@/store/use-session.store';

function EmptyLayout({ children }: { children: React.ReactNode }) {
  const isLoggedIn = useSession((state) => state.signedIn);
  return (
    <AppShell padding="md">
      <AppShell.Header p="sm">
        <Header isLoggedIn={isLoggedIn} />
      </AppShell.Header>
      <AppShell.Main>{children}</AppShell.Main>
      <AppShell.Footer p="md">
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
}

export default EmptyLayout;
