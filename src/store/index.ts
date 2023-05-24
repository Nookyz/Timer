/* eslint-disable import/no-cycle */
/* eslint-disable import/no-named-as-default */
import { configureStore } from '@reduxjs/toolkit';
import countersSlice from './slices/counters/focusCounter';
import shortBreakCounterSlice from './slices/counters/shortBreakCounter';
import longBreakCounterSlice from './slices/counters/longBreakCounter';
import counterStateSlice from './slices/state';

export const store = configureStore({
  reducer: {
    focusCounter: countersSlice,
    shortBreakCounter: shortBreakCounterSlice,
    longBreakCounter: longBreakCounterSlice,
    state: counterStateSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
