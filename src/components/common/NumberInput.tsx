import { FC } from 'react';
import styled from 'styled-components';
import TriangleIcon from '../icons/TriangleIcon';

interface Props {
  value: number;
  onIncrease: () => void;
  onDecrece: () => void;
}

const Counter: FC<Props> = ({
  value,
  onIncrease,
  onDecrece,
}) => (
  <NumberInputStyled>
    <Text>{value}</Text>
    <CounterContainer>
      <Increase onClick={onIncrease}>
        <TriangleIcon />
      </Increase>
      <Decrece onClick={onDecrece}>
        <TriangleIcon />
      </Decrece>
    </CounterContainer>
  </NumberInputStyled>
);

const NumberInputStyled = styled.div`
  display: flex;
  align-items: center;
  width: 96px;
  height: 40px;
  border-radius: 8px;
  
  border: 1px solid ${({ theme }) => theme.input.borderColor};
`;

const CounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 1px solid ${({ theme }) => theme.input.borderColor};
  width: 30px;
  height: 100%;

  :first-child {
    border-bottom: 1px solid ${({ theme }) => theme.input.borderColor};
  }
`;

const Increase = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
  cursor: pointer;

  svg path {
    transition: 1s;
    fill: ${({ theme }) => theme.input.arrowColor};
  }
`;

const Decrece = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
  transform: rotate(180deg);
  cursor: pointer;

  svg path {
    transition: 1s;
    fill: ${({ theme }) => theme.input.arrowColor};
  }
`;

const Text = styled.p`
  font-family: 'Roboto Flex';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.15px;
  width: 100%;

  color: ${({ theme }) => theme.input.textColor};
  transition: 1s;
`;

export default Counter;
