import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface AppStore {
  isNavMenuClose: boolean;
  open: () => void;
  close: () => void;
  collapse: () => void;
}

const useAppContext = create<AppStore>()(
  devtools(
    (set) => ({
      isNavMenuClose: false,
      open: () => set(() => ({ isNavMenuClose: true })),
      close: () => set(() => ({ isNavMenuClose: false })),
      collapse: () => set((state) => ({ isNavMenuClose: !state.isNavMenuClose })),
    }),
    {
      name: '_app_context_',
      anonymousActionType: 'app_action',
    },
  ),
);

export default useAppContext;
