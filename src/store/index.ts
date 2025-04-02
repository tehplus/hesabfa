import { configureStore } from '@reduxjs/toolkit';
import { uiReducer } from './slices/uiSlice';
import { accountReducer } from './slices/accountSlice';

export const store = configureStore({
    reducer: {
        ui: uiReducer,
        account: accountReducer,
    },
    devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;