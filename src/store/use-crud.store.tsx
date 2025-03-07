import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type KeyState = 'current' | 'list' | 'create' | 'update' | 'delete' | 'read' | 'search';

interface AnyObject {
  [key: string]: any;
}
interface KeyObject<T = AnyObject> {
  result: T | null;
  current: T | null;
  isLoading: boolean;
  isSuccess: boolean;
}
interface ListObject<T = AnyObject> {
  result: {
    items: T[];
    pagination: {
      current: number;
      pageSize: number;
      total: number;
      showSizeChanger: boolean;
    };
  };
  isLoading: boolean;
  isSuccess: boolean;
}
interface CrudState<T = AnyObject> {
  current: T | null;
  list: ListObject<T>;
  create: KeyObject<T>;
  update: KeyObject<T>;
  delete: KeyObject<T>;
  read: KeyObject<T>;
  search: KeyObject<T>;
}
interface CrudStore<T = AnyObject> extends CrudState<T> {
  reset: () => void;
  resetAction: (action: KeyState) => void;
  currentItem: (payload: AnyObject) => void;
  currentAction: (params: { action: KeyState; payload: AnyObject }) => void;
  get: (params: { endpoint: string; options?: AnyObject }) => Promise<void>;
  post: (params: { endpoint: string; body: AnyObject }) => Promise<void>;
  patch: (params: { endpoint: string; id: string | number; body: AnyObject }) => Promise<void>;
  remove: (params: { endpoint: string; id: string | number }) => Promise<void>;
  getOne: (params: { endpoint: string; id: string | number }) => Promise<void>;
  find: (params: { endpoint: string; options?: AnyObject }) => Promise<void>;
}

const initialKeyState: KeyObject = {
  result: null,
  current: null,
  isLoading: false,
  isSuccess: false,
};

const initialState: CrudState = {
  current: null,
  list: {
    result: {
      items: [],
      pagination: {
        current: 1,
        pageSize: 10,
        total: 1,
        showSizeChanger: false,
      },
    },
    isLoading: false,
    isSuccess: false,
  },
  create: initialKeyState,
  update: initialKeyState,
  delete: initialKeyState,
  read: initialKeyState,
  search: { ...initialKeyState, result: [] },
};

const useCrud = create<CrudStore>()(
  devtools(
    (set) => ({
      ...initialState,
      reset: () => set(() => ({ ...initialState })),
      resetAction: (action: KeyState) => set(() => ({ [action]: initialState[action] })),
      currentItem: (payload: AnyObject) => set(() => ({ current: payload })),
      currentAction: ({ action, payload }: { action: KeyState; payload: AnyObject }) =>
        set(() => ({ [action]: { ...initialKeyState, current: payload } })),
      get: async (params: { endpoint: string; options?: AnyObject }) => {
        set((state) => ({ list: { ...state.list, isLoading: true } }));
        try {
          console.log('use-crud.store.tsx: get', params);
          set(() => ({
            list: {
              // TODO: Replace with real data
              result: {
                items: [],
                pagination: {
                  current: 1,
                  pageSize: 10,
                  total: 1,
                  showSizeChanger: false,
                },
              },
              isSuccess: true,
              isLoading: false,
            },
          }));
        } catch (error) {
          set((state) => ({ list: { ...state.list, isSuccess: false, isLoading: false } }));
        }
      },
      post: async (params: { endpoint: string; body: AnyObject }) => await Promise.resolve(params),
      patch: async (params: { endpoint: string; id: string | number; body: AnyObject }) =>
        await Promise.resolve(params),
      remove: async (params: { endpoint: string; id: string | number }) =>
        await Promise.resolve(params),
      getOne: async (params: { endpoint: string; id: string | number }) =>
        await Promise.resolve(params),
      find: async (params: { endpoint: string; options?: AnyObject }) =>
        await Promise.resolve(params),
    }),
    {
      name: '_session_store_',
      anonymousActionType: 'session_action',
    },
  ),
);

// ? To remove/clean session use:
// useSession.persist.clearStorage()

export default useCrud;
