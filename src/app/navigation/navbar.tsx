import classes from './navbar.module.css';

import { useState } from 'react';
import {
  Icon2fa,
  IconBellRinging,
  IconDatabaseImport,
  IconFingerprint,
  IconKey,
  IconLayoutSidebarLeftCollapse,
  IconLayoutSidebarRightCollapse,
  IconReceipt2,
  IconSettings,
} from '@tabler/icons-react';
import { Tooltip, UnstyledButton } from '@mantine/core';

const data = [
  { link: '', label: 'Notifications', icon: IconBellRinging },
  { link: '', label: 'Billing', icon: IconReceipt2 },
  { link: '', label: 'Security', icon: IconFingerprint },
  { link: '', label: 'SSH Keys', icon: IconKey },
  { link: '', label: 'Databases', icon: IconDatabaseImport },
  { link: '', label: 'Authentication', icon: Icon2fa },
  { link: '', label: 'Other Settings', icon: IconSettings },
];

interface NavbarLinkProps {
  icon: typeof Icon2fa;
  label: string;
  active?: boolean;
  opened?: boolean;
  onClick?: () => void;
}

function NavbarLink({ icon: Icon, label, active, onClick, opened }: NavbarLinkProps) {
  return (
    <Tooltip disabled={opened} label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
        <Icon className={classes.linkIcon} stroke={1.5} />
        {opened && <span>{label}</span>}
      </UnstyledButton>
    </Tooltip>
  );
}

export function Navbar({
  opened,
  collapse,
  isMobile,
}: {
  opened: boolean;
  collapse: () => void;
  isMobile?: boolean;
}) {
  const [active, setActive] = useState('Billing');

  const links = data.map((item, idx) => (
    <NavbarLink
      active={item.label === active || undefined}
      key={idx}
      onClick={() => {
        setActive(item.label);
      }}
      icon={item.icon}
      label={item.label}
      opened={opened || isMobile}
    />
  ));

  return (
    <>
      <div className={classes.navbarMain}>{links}</div>

      {!isMobile && (
        <div className={classes.footer}>
          <NavbarLink
            onClick={() => {
              collapse();
            }}
            icon={opened ? IconLayoutSidebarLeftCollapse : IconLayoutSidebarRightCollapse}
            label={opened ? 'Collapse' : 'Expand'}
            opened={opened || isMobile}
          />
        </div>
      )}
    </>
  );
}
