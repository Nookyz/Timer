import { FC } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import CloseIcon from './icons/CloseIcon';
import Switch from './common/Switch';
import Counter from './common/NumberInput';
import { useAppDispatch, useAppSelector } from '../store/hooks';

import { focusValueSlice } from '../store/slices/counters/focusCounter';
import { shortBreakCounterSlice } from '../store/slices/counters/shortBreakCounter';
import { longBreakCounterSlice } from '../store/slices/counters/longBreakCounter';
import { counterStateSlice } from '../store/slices/state';

interface Props {
  onClose: () => void;
}

const ModalContent: FC<Props> = ({
  onClose,
}) => {
  const dispatch = useAppDispatch();

  const focusCounter = useAppSelector((state) => state.focusCounter);
  const shortBreakCounter = useAppSelector((state) => state.shortBreakCounter);
  const longBreakCounter = useAppSelector((state) => state.longBreakCounter);

  const { isDark, hasNotififacions } = useAppSelector((state) => state.state);

  const toggleTheme = () => {
    dispatch(counterStateSlice.actions.toggleTheme());
  };

  const toggleNotififacions = () => {
    dispatch(counterStateSlice.actions.toggleNotififacions());
  };

  const handleIncrementFocusValue = () => {
    dispatch(focusValueSlice.actions.increment());
  };

  const handleDecrementFocusValue = () => {
    dispatch(focusValueSlice.actions.decrement());
  };

  const handleIncrementShortBreakValue = () => {
    dispatch(shortBreakCounterSlice.actions.increment());
  };

  const handleDecrementShortBreakValue = () => {
    dispatch(shortBreakCounterSlice.actions.decrement());
  };

  const handleIncrementLongBreakValue = () => {
    dispatch(longBreakCounterSlice.actions.increment());
  };

  const handleDecrementLongBreakValue = () => {
    dispatch(longBreakCounterSlice.actions.decrement());
  };

  return (
    <ModalContentStyled
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.3,
        },
      }}
      exit={{
        opacity: 0,
      }}
    >
      <Header>
        <Title>Settings</Title>
        <IconWrap onClick={onClose}>
          <CloseIcon />
        </IconWrap>
      </Header>
      <Row>
        <Text>Dark mode</Text>
        <Switch
          isActive={isDark}
          onChange={toggleTheme}
        />
      </Row>
      <Row>
        <Text>Focus length</Text>
        <Counter
          value={focusCounter.value}
          onIncrease={handleIncrementFocusValue}
          onDecrece={handleDecrementFocusValue}
        />
      </Row>
      <Row>
        <Text>Short break length</Text>
        <Counter
          value={shortBreakCounter.value}
          onIncrease={handleIncrementShortBreakValue}
          onDecrece={handleDecrementShortBreakValue}
        />
      </Row>
      <Row>
        <Text>Long break length</Text>
        <Counter
          value={longBreakCounter.value}
          onIncrease={handleIncrementLongBreakValue}
          onDecrece={handleDecrementLongBreakValue}
        />
      </Row>
      <Row>
        <Text>Notifications</Text>
        <Switch
          isActive={hasNotififacions}
          onChange={toggleNotififacions}
        />
      </Row>
    </ModalContentStyled>
  );
};

const ModalContentStyled = styled(motion.div)`
  position: fixed;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;

  width: 448px;
  height: 418px;
  padding: 0 24px 16px 24px;

  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.039), 0px 5.5px 16px rgba(0, 0, 0, 0.19);
  border-radius: 24px;

  transition: 1s;
  background: ${({ theme }) => theme.backgroundColor};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 82px;
  padding: 27px 0;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
`;

const Title = styled.p`
  font-family: 'Roboto Flex';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.15px;

  transition: 1s;
  color: ${({ theme }) => theme.textColor};
`;

const Text = styled.p`
  font-family: 'Roboto Flex';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  letter-spacing: 0.15px;

  transition: 1s;
  color: ${({ theme }) => theme.textColor};
`;

const IconWrap = styled.div`
  display: flex;
  cursor: pointer;

  svg path {
    transition: 1s;
    fill: ${({ theme }) => theme.textColor};
  }
`;

export default ModalContent;
