/* Types */
export type Action = ReducerAction | AsyncCreatorFn;

// Function Types
export type DispatchFn = (action: ReducerAction) => void;
export type ReducerFn = (state: any, action: ReducerAction) => any;
export type MiddlewareFn = (ctx: MiddlewareContext) => any;
export type SelectorFn = (state: any) => any;
export type CreatorFn = (...args: any[]) => Action;
export type WrappedCreatorFn = (...args: any[]) => void;
export type AsyncCreatorFn = (dispatch: DispatchFn) => void;

// Interfaces
export interface ReducerAction {
    [key: string]: any;
    type?: string;
}

export interface Store {
    initialState: any;
    reducer: ReducerFn;
    middleware: MiddlewareFn[];
}

export interface ProviderContext {
    dispatch: DispatchFn;
    state: any;
}

export interface ReducerObject {
    [key: string]: ReducerFn;
}

export interface ActionsObject {
    [key: string]: CreatorFn;
}

export interface WrappedActionsObject {
    [key: string]: WrappedCreatorFn
}

export interface MiddlewareContext {
    reducer: ReducerFn;
    prevState: any;
    newState: any;
    action: ReducerAction;
}
