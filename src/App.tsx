import Router from './router';
import useSession from './store/use-session.store';

function App() {
  const isLoggedIn = useSession((state) => state.signedIn);
  return <Router isLoggedIn={isLoggedIn} />;
}

export default App;
