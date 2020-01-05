import { Action, Store } from './types';
export declare const useStore: ({ reducer, initialState, middleware }: Store) => {
    state: any;
    dispatch: (action: Action) => void;
};
interface ProviderProps {
    children: [];
    store: Store;
}
export declare const Provider: ({ children, store }: ProviderProps) => import("preact").VNode<{}>;
export {};