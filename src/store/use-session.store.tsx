import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

interface SessionPayload {
  signedIn: boolean;
  id: string | null;
  email: string | null;
  name: string | null;
  surname: string | null;
  photo: string | null;
}
interface SessionStore extends SessionPayload {
  signIn: (payload: SessionPayload) => void;
  signOut: () => void;
}

const initialState: SessionPayload = {
  signedIn: false,
  id: null,
  email: null,
  name: null,
  surname: null,
  photo: null,
};

const useSession = create<SessionStore>()(
  persist(
    devtools(
      (set) => ({
        ...initialState,
        signIn: (payload: SessionPayload) =>
          set(() => ({
            signedIn: payload.signedIn,
            id: payload.id,
            email: payload.email,
            name: payload.name,
            surname: payload.surname,
            photo: payload.photo,
          })),
        signOut: () => set(() => ({ ...initialState })),
      }),
      {
        name: '_session_store_',
        anonymousActionType: 'session_action',
      },
    ),
    {
      name: '__rdt_sessionstr__',
      // TODO: Change to LocalStorage
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

// ? To remove/clean session use:
// useSession.persist.clearStorage()

export default useSession;
