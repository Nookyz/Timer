import { createSlice } from '@reduxjs/toolkit';

export enum CounterState {
  Focus,
  ShortBreak,
  LongBreak,
}

export enum Theme {
  Light,
  Dark,
}

interface ICounterState {
  counterState: CounterState;
  isDark: boolean;
  hasNotififacions: boolean;
}

const initialState: ICounterState = {
  counterState: CounterState.Focus,
  isDark: false,
  hasNotififacions: false,
};

export const counterStateSlice = createSlice({
  name: 'counter state',
  initialState,
  reducers: {
    next: (state) => {
      if (state.counterState === CounterState.LongBreak) {
        state.counterState = CounterState.Focus;
      } else {
        state.counterState += 1;
      }
    },
    toggleTheme: (state) => {
      state.isDark = !state.isDark;
    },
    toggleNotififacions: (state) => {
      state.hasNotififacions = !state.hasNotififacions;
    },
  },
});

export default counterStateSlice.reducer;
