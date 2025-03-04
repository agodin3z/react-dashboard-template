import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface FlowStore {
  isCreateOpen: boolean;
  isUpdateOpen: boolean;
  isReadOpen: boolean;
  isDeleteModalOpen: boolean;
  isDataTableListOpen: boolean;
  deleteModal: {
    open: () => void;
    close: () => void;
  };
  readPanel: {
    open: () => void;
    close: () => void;
  };
  updatePanel: {
    open: () => void;
    close: () => void;
  };
  createPanel: {
    open: () => void;
    close: () => void;
  };
  reset: () => void;
}

const initialState = {
  isCreateOpen: false,
  isUpdateOpen: false,
  isReadOpen: false,
  isDeleteModalOpen: false,
  isDataTableListOpen: true,
};

const useFlowContext = create(
  devtools<FlowStore>((set) => ({
    ...initialState,
    deleteModal: {
      open: () => set(() => ({ isDeleteModalOpen: true })),
      close: () => set(() => ({ isDeleteModalOpen: false })),
    },
    readPanel: {
      open: () => set(() => ({ isDataTableListOpen: false, isReadOpen: true })),
      close: () => set(initialState),
    },
    updatePanel: {
      open: () => set(() => ({ isDataTableListOpen: false, isUpdateOpen: true })),
      close: () => set(initialState),
    },
    createPanel: {
      open: () => set(() => ({ isDataTableListOpen: false, isCreateOpen: true })),
      close: () => set(initialState),
    },
    reset: () => set(() => ({ ...initialState })),
  })),
);

export default useFlowContext;
