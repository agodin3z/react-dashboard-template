import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import PageLoader from '@/components/loader/page-loader';

const Login = lazy(() => import('@/pages/login/login.page'));
const NotFound = lazy(() => import('@/pages/not-found/not-found.page'));

export default function AuthRouter() {
  const location = useLocation();
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/logout" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/notfound" replace />} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
