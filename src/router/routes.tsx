import { JSX, lazy } from 'react';

export type RouteConfig = {
  key: string;
  path: string;
  component: React.LazyExoticComponent<() => JSX.Element>;
  allowedRoles: number[];
};

export const routes: RouteConfig[] = [
  {
    key: 'Home',
    path: '/',
    component: lazy(() => import('@/pages/home.page')),
    allowedRoles: [1],
  },
];
