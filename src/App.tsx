/* eslint-disable import/no-extraneous-dependencies */
import {
  useEffect, FC, useCallback, useMemo,
} from 'react';
import { styled } from 'styled-components';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Chip from './components/Chip';
import Footer from './components/Footer';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { formatMinutes, formatSeconds } from './utils/styles/timestamp';
import { focusValueSlice } from './store/slices/counters/focusCounter';
import { CounterState } from './store/slices/state';
import { shortBreakCounterSlice } from './store/slices/counters/shortBreakCounter';
import { longBreakCounterSlice } from './store/slices/counters/longBreakCounter';

const App: FC = () => {
  const dispatch = useAppDispatch();

  const focusCounter = useAppSelector((state) => state.focusCounter);
  const shortBreakCounter = useAppSelector((state) => state.shortBreakCounter);
  const longBreakCounter = useAppSelector((state) => state.longBreakCounter);

  const { hasNotififacions, counterState } = useAppSelector((state) => state.state);

  const handlePlay = useCallback(() => {
    switch (counterState) {
      case CounterState.Focus:
        if (focusCounter.seconds === 0) return;
        dispatch(focusValueSlice.actions.paly());
        break;
      case CounterState.ShortBreak:
        if (shortBreakCounter.seconds === 0) return;
        dispatch(shortBreakCounterSlice.actions.paly());
        break;
      case CounterState.LongBreak:
        if (longBreakCounter.seconds === 0) return;
        dispatch(longBreakCounterSlice.actions.paly());
        break;
      default: break;
    }
  }, [counterState, focusCounter.seconds, shortBreakCounter.seconds, longBreakCounter.seconds]);

  const handlePause = useCallback(() => {
    switch (counterState) {
      case CounterState.Focus:
        dispatch(focusValueSlice.actions.pause());
        break;
      case CounterState.ShortBreak:
        dispatch(shortBreakCounterSlice.actions.pause());
        break;
      case CounterState.LongBreak:
        dispatch(longBreakCounterSlice.actions.pause());
        break;
      default: break;
    }
  }, [counterState]);

  const isCountdownStart = () => {
    switch (counterState) {
      case CounterState.Focus:
        return focusCounter.isCountdownStart;
      case CounterState.ShortBreak:
        return shortBreakCounter.isCountdownStart;
      case CounterState.LongBreak:
        return longBreakCounter.isCountdownStart;
      default: return false;
    }
  };

  const [minumes, seconds]: string[] = useMemo(() => {
    switch (counterState) {
      case CounterState.Focus:
        return [formatMinutes(focusCounter.seconds), formatSeconds(focusCounter.seconds)];
      case CounterState.ShortBreak:
        return [formatMinutes(shortBreakCounter.seconds), formatSeconds(shortBreakCounter.seconds)];
      case CounterState.LongBreak:
        return [formatMinutes(longBreakCounter.seconds), formatSeconds(longBreakCounter.seconds)];
      default: return [];
    }
  }, [counterState, focusCounter.seconds, shortBreakCounter.seconds, longBreakCounter.seconds]);

  // Timer for Focus
  useEffect(() => {
    const timer = () => {
      if (focusCounter.seconds > 0 && focusCounter.isCountdownStart) {
        dispatch(focusValueSlice.actions.paly());
      }
      if (focusCounter.seconds === 0 && focusCounter.isCountdownStart && hasNotififacions) {
        dispatch(focusValueSlice.actions.pause());
        toast('Focus time end');
        return;
      }
      if (focusCounter.seconds === 0) {
        dispatch(focusValueSlice.actions.pause());
      }
    };
    const interval = setTimeout(timer, 1000);
    return () => {
      clearTimeout(interval);
    };
  }, [focusCounter.isCountdownStart, focusCounter.seconds]);

  // Timer for Short Break
  useEffect(() => {
    const timer = () => {
      if (shortBreakCounter.seconds > 0 && shortBreakCounter.isCountdownStart) {
        dispatch(shortBreakCounterSlice.actions.paly());
      }
      if (shortBreakCounter.seconds === 0
        && shortBreakCounter.isCountdownStart && hasNotififacions
      ) {
        dispatch(shortBreakCounterSlice.actions.pause());
        toast('Short Break time end');
        return;
      }
      if (shortBreakCounter.seconds === 0) {
        dispatch(shortBreakCounterSlice.actions.pause());
      }
    };
    const interval = setTimeout(timer, 1000);
    return () => {
      clearTimeout(interval);
    };
  }, [shortBreakCounter.isCountdownStart, shortBreakCounter.seconds]);

  // Timer for Long Break
  useEffect(() => {
    const timer = () => {
      if (longBreakCounter.seconds > 0 && longBreakCounter.isCountdownStart) {
        dispatch(longBreakCounterSlice.actions.paly());
      }
      if (
        longBreakCounter.seconds === 0 && longBreakCounter.isCountdownStart && hasNotififacions
      ) {
        dispatch(longBreakCounterSlice.actions.pause());
        toast('Long Break time end');
        return;
      }
      if (longBreakCounter.seconds === 0) {
        dispatch(longBreakCounterSlice.actions.pause());
      }
    };
    const interval = setTimeout(timer, 1000);
    return () => {
      clearTimeout(interval);
    };
  }, [longBreakCounter.isCountdownStart, longBreakCounter.seconds]);

  return (
    <HomeStyled>
      <ToastContainer />
      <Container>
        <HeaderStyled>
          <Chip />
        </HeaderStyled>

        <TimerStyled>
          <Time isPlay={isCountdownStart()}>{minumes}</Time>
          <Time isPlay={isCountdownStart()}>{seconds}</Time>
        </TimerStyled>

        <Footer
          isCountdownStart={isCountdownStart()}
          onPlay={handlePlay}
          onPause={handlePause}
        />
      </Container>
    </HomeStyled>
  );
};

const HomeStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  background: ${({ theme }) => theme.backgroundColor};
  transition: 1s;
`;

const Container = styled.div`
  width: 320px;
`;

const HeaderStyled = styled.div`
  display: flex;
  justify-content: center;
`;

const TimerStyled = styled.div`
  padding: 32px 0;
`;

const Time = styled.div<{ isPlay: boolean }>`
  font-family: 'Roboto Flex';
  font-style: normal;
  font-weight: ${({ isPlay }) => (isPlay ? 800 : 200)};
  font-size: 256px;
  line-height: 85%;
  text-align: center;

  color: ${({ theme }) => theme.textColor};
  transition: 1s;
`;

export default App;
