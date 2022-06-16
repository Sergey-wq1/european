import { CSSProperties, FC, ReactNode } from 'react';
import Modal from 'react-modal';

export interface CustomPositionType {
  top?: number | string;
  bottom?: number | string;
  left?: number | string;
  right?: number | string;
  transform?: string;
}

export interface ModalProps {
  isOpen: boolean;
  isCloseEsc: boolean;
  overlayColor?: string;
  backgroundColor?: string;
  customPosition?: CustomPositionType;
  height?: string | number;
  width?: string | number;
  children?: ReactNode;
  onRequestClose: () => void;
}

const CustomModal: FC<ModalProps> = (props) => {
  const {
    isOpen = false,
    isCloseEsc = true,
    overlayColor = 'rgba(255, 255, 255, 0.75)',
    backgroundColor = '#FFFFFF',
    onRequestClose = () => undefined,
    customPosition = { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
    width = '200px',
    height = '200px',
    children,
  } = props;


  const overlayStyle: CSSProperties = {
    backgroundColor: overlayColor,
  };

  const contentStyle: CSSProperties = {
    width,
    height,
    position: 'absolute',
    ...customPosition,
    border: '1px solid #ccc',
    background: backgroundColor,
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '15px',
    outline: 'none',
    padding: '30px 20px 20px 20px',
  };

  return (
    <Modal
      ariaHideApp={false}
      onRequestClose={onRequestClose}
      isOpen={isOpen}
      shouldCloseOnEsc={isCloseEsc}
      style={{ overlay: overlayStyle, content: contentStyle }}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;