import AppRouter from './app.router';
import AuthRouter from './auth.router';

export default function Router({ isLoggedIn = false }: { isLoggedIn: boolean }) {
  if (!isLoggedIn) {
    return <AuthRouter />;
  }
  return <AppRouter />;
}
