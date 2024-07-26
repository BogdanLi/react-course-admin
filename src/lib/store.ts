import { configureStore } from '@reduxjs/toolkit';
import { extensionsApi } from './queries/extensionsApi';

export const store = configureStore({
  reducer: {
    [extensionsApi.reducerPath]: extensionsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(extensionsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
