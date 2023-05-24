import {
  FC, useRef, useCallback,
} from 'react';
import { styled } from 'styled-components';

import MoreIcon from './icons/MoreIcon';
import PlayIcon from './icons/PlayIcon';
import PauseIcon from './icons/PauseIcon';
import NextIcon from './icons/NextIcon';
import Modal, { ModalHandle } from './common/Modal';
import ModalContent from './ModalContent';

import { counterStateSlice } from '../store/slices/state';
import { useAppDispatch } from '../store/hooks';

interface Props {
  isCountdownStart: boolean;
  onPlay: () => void;
  onPause: () => void;
}

const Footer: FC<Props> = ({
  isCountdownStart,
  onPlay,
  onPause,
}) => {
  const dispatch = useAppDispatch();

  const modalRef = useRef<ModalHandle | null>(null);

  const handleOpenModal = useCallback(() => {
    if (modalRef.current) {
      modalRef.current.open();
    }
  }, [modalRef]);

  const handleCloseModal = useCallback(() => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  }, []);

  return (
    <FooterStyled>
      <LeftButton onClick={handleOpenModal}>
        <MoreIcon />
      </LeftButton>
      {isCountdownStart ? (
        <Button onClick={onPause}>
          <PauseIcon />
        </Button>
      ) : (
        <Button onClick={onPlay}>
          <PlayIcon />
        </Button>
      )}
      <LeftButton onClick={() => dispatch(counterStateSlice.actions.next())}>
        <NextIcon />
      </LeftButton>
      <Modal ref={modalRef}>
        <ModalContent onClose={handleCloseModal} />
      </Modal>
    </FooterStyled>
  );
};

const FooterStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 24px;

  background: ${({ theme }) => theme.buttons.common};
  transition: 1s;

  svg path {
    transition: 1s;
    fill: ${({ theme }) => theme.textColor};
  }
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 128px;
  height: 96px;
  border-radius: 32px;

  background: ${({ theme }) => theme.buttons.main};
  transition: 1s;

  svg path {
    transition: 1s;
    fill: ${({ theme }) => theme.textColor};
  }
`;

export default Footer;
