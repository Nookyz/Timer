import { createSlice } from '@reduxjs/toolkit';

interface ShortBreakCounterState {
  value: number;
  seconds: number;
  isCountdownStart: boolean;
}

const initialState: ShortBreakCounterState = {
  value: 0,
  seconds: 0,
  isCountdownStart: false,
};

export const shortBreakCounterSlice = createSlice({
  name: 'short break counter',
  initialState,
  reducers: {
    increment: (state) => {
      if (state.value === 60) {
        return;
      }
      state.seconds = (state.value + 1) * 60;
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value === 0) {
        return;
      }
      state.seconds = (state.value - 1) * 60;
      state.value -= 1;
    },
    paly: (state) => {
      state.isCountdownStart = true;
      state.seconds -= 1;
    },
    pause: (state) => {
      state.isCountdownStart = false;
    },
  },
});

export default shortBreakCounterSlice.reducer;
