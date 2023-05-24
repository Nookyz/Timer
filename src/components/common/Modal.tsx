import {
  useState, forwardRef, useImperativeHandle, useCallback,
} from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

export type ModalHandle = {
  open: () => void;
  close: () => void;
};

interface Props {
  children: JSX.Element;
}

const Modal = forwardRef<ModalHandle, Props>(({
  children,
}, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleOpenModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  useImperativeHandle(ref, () => ({
    open: handleOpenModal,
    close: handleCloseModal,
  }));

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <ModalBackdrop
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
            onClick={handleCloseModal}
          />
          {children}
        </>
      )}
    </AnimatePresence>
  );
});

const ModalBackdrop = styled(motion.div)`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background: rgba(49, 49, 49, 0.3);
  z-index: 99;
`;

export default Modal;
