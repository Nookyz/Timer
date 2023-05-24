import { FC } from 'react';
import styled from 'styled-components';

interface Props {
  isActive: boolean;
  onChange: () => void;
}

const Switch: FC<Props> = ({ isActive, onChange }) => (
  <ToggleStyled
    isActive={isActive}
    onClick={onChange}
  >
    <Track />
    <Knob />
  </ToggleStyled>
);

const Knob = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 100%;
  position: absolute;
  transition: 0.4s;
  top: 50%;
  transform: translateY(-50%);
`;

const Track = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  position: absolute;
`;

const ToggleStyled = styled.div<{ isActive: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  width: 34px;
  height: 20px;
  cursor: pointer;

  ${Knob} {
    left: ${({ isActive }) => (isActive ? '16px' : '2px')};
    background-color: ${({ theme }) => theme.switch.trackColor};
  }

  ${Track} {
    background-color: ${({ theme }) => theme.switch.backgroundColor};
  }
`;

export default Switch;
