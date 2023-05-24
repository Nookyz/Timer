import { styled } from 'styled-components';
import MindIcon from './icons/MindIcon';
import { useAppSelector } from '../store/hooks';
import { CounterState } from '../store/slices/state';
import CofeIcon from './icons/CofeIcon';

const Chip = () => {
  const { counterState } = useAppSelector((state) => state.state);

  switch (counterState) {
    case CounterState.Focus:
      return (
        <ChipStyled>
          <IconWrap>
            <MindIcon />
          </IconWrap>
          <Text>Focus</Text>
        </ChipStyled>
      );
    case CounterState.ShortBreak:
      return (
        <ChipStyled>
          <IconWrap>
            <CofeIcon />
          </IconWrap>
          <Text>Short Break</Text>
        </ChipStyled>
      );
    case CounterState.LongBreak:
      return (
        <ChipStyled>
          <IconWrap>
            <CofeIcon />
          </IconWrap>
          <Text>Long Break</Text>
        </ChipStyled>
      );
    default: return null;
  }
};

const ChipStyled = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;
  height: 48px;
  border-radius: 9999px;

  background: ${({ theme }) => theme.chip.backgroundColor};
  border: 2px solid ${({ theme }) => theme.chip.borderColor};
  transition: 1s;
`;

const IconWrap = styled.div`
  display: flex;
  align-items: center;
  margin-right: 9px;
  
  svg path {
    transition: 1s;
    fill: ${({ theme }) => theme.chip.borderColor};
  }
`;

const Text = styled.div`
  font-family: 'Roboto Flex';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  text-align: center;

  color: ${({ theme }) => theme.chip.textColor};
  transition: 1s;
`;

export default Chip;
