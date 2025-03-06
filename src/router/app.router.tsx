// }

import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import PageLoader from '@/components/loader/page-loader';
import { routes } from './routes';

const NotFound = lazy(() => import('@/pages/not-found/not-found.page'));

function Logout() {
  return <div>Logout...</div>;
}

export default function AppRouter() {
  const location = useLocation();
  // TODO: Get user role from session
  const userRole = 1;

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes location={location} key={location.pathname}>
        <Route path="/login" element={<Navigate to="/" replace />} />
        {routes.map((route) => {
          return route.allowedRoles.includes(userRole) ? (
            <Route key={route.key} path={route.path} element={<route.component />} />
          ) : null;
        })}
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<Navigate to="/notfound" replace />} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
