import { FC } from 'react';
import classNames from './Navbar.module.scss';
import { links } from '../../config/links';
import LogoIcon from '../../../../components/Icons/LogoIcon/LogoIcon';

export interface NavbarProps {
  onLogoClick: () => void;
}

const Navbar: FC<NavbarProps> = (props) => {
  const { onLogoClick } = props;

  return (
    <div className={classNames.root}>
      <div className={classNames.root_firstBlock}>
        <div onClick={onLogoClick} className={classNames.root_logo}>
          <LogoIcon />
        </div>
        <div className={classNames.root_mainText}>
          <div className={classNames.root_text1}>Russian</div>
          <div className={classNames.root_text2}>
            University of Arts
          </div>
        </div>
      </div>
      <div className={classNames.root_secondBlock}>
        {links.map((link) => (
          <a className={classNames.root_link} key={link.id}>
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
