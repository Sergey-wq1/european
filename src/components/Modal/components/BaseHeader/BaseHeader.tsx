import { FC, memo } from 'react';
import classNames from './BaseHeader.module.scss';
import CloseIcon from '../../../Icons/CloseIcon/CloseIcon';

export interface HeaderProps {
  onCloseClick: () => void;
}

const BaseHeader: FC<HeaderProps> = memo((props) => {
  const {
    onCloseClick = () => undefined,
  } = props;

  return (
    <div className={classNames.root}>
      <div className={classNames.root_headerText}>Play video</div>
      <div
        onClick={onCloseClick}
        className={classNames.root_closeIcon}
      >
        <CloseIcon width={24} height={24} color='#000000' />
      </div>
    </div>
  );
});

export default BaseHeader;