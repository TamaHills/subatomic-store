import { VNode } from 'preact';
import { ProviderContext, Store, ActionsObject, selectorFn, reducerFn } from './types';
export declare const init: ProviderContext;
export declare const ctx: import("preact").Context<ProviderContext>;
interface ProviderProps {
    children: [];
    store: Store;
}
export declare const Provider: ({ children, store: { reducer, initialState }, }: ProviderProps) => VNode<{}>;
export declare const connect: (selector: selectorFn, actions: ActionsObject) => (component: (props: any) => VNode<{}>) => () => VNode<{}>;
export declare const createStore: (reducer: reducerFn) => Store;
export {};