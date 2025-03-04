import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface CrudStore {
  isModalOpen: boolean;
  isPanelClose: boolean;
  isBoxCollapsed: boolean;
  isReadBoxOpen: boolean;
  isAdvancedBoxOpen: boolean;
  isEditBoxOpen: boolean;
  modal: {
    open: () => void;
    close: () => void;
  };
  advancedBox: {
    open: () => void;
    close: () => void;
  };
  editBox: {
    open: () => void;
    close: () => void;
  };
  panel: {
    open: () => void;
    close: () => void;
    collapse: () => void;
  };
  collapsedBox: {
    open: () => void;
    close: () => void;
    collapse: () => void;
  };
  readBox: {
    open: () => void;
    close: () => void;
    collapse: () => void;
  };
  reset: () => void;
}

const initialState = {
  isModalOpen: false,
  isPanelClose: true,
  isBoxCollapsed: false,
  isReadBoxOpen: false,
  isAdvancedBoxOpen: false,
  isEditBoxOpen: false,
};

const useCrudContext = create<CrudStore>()(
  devtools(
    (set) => ({
      ...initialState,
      modal: {
        open: () => set(() => ({ isModalOpen: true })),
        close: () => set(() => ({ isModalOpen: false })),
      },
      advancedBox: {
        open: () =>
          set(() => ({ isReadBoxOpen: false, isEditBoxOpen: false, isAdvancedBoxOpen: true })),
        close: () => set(() => ({ isAdvancedBoxOpen: false })),
      },
      editBox: {
        open: () =>
          set(() => ({ isReadBoxOpen: false, isAdvancedBoxOpen: false, isEditBoxOpen: true })),
        close: () => set(() => ({ isEditBoxOpen: false })),
      },
      panel: {
        open: () => set(() => ({ isPanelClose: false })),
        close: () => set(() => ({ isPanelClose: true })),
        collapse: () => set((state) => ({ isPanelClose: !state.isPanelClose })),
      },
      collapsedBox: {
        open: () => set(() => ({ isBoxCollapsed: true })),
        close: () => set(() => ({ isBoxCollapsed: false })),
        collapse: () => set((state) => ({ isBoxCollapsed: !state.isBoxCollapsed })),
      },
      readBox: {
        open: () =>
          set(() => ({ isAdvancedBoxOpen: false, isEditBoxOpen: false, isReadBoxOpen: true })),
        close: () => set(() => ({ isReadBoxOpen: false })),
        collapse: () => set((state) => ({ isReadBoxOpen: !state.isReadBoxOpen })),
      },
      reset: () => set(() => ({ ...initialState })),
    }),
    {
      name: '_crud_context_',
      anonymousActionType: 'crud_action',
    },
  ),
);

export default useCrudContext;
