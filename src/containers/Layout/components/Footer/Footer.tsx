import { FC } from 'react';
import classNames from './Footer.module.scss';
import LogoIcon from '../../../../components/Icons/LogoIcon/LogoIcon';
import { links } from '../../config/links';

export interface FooterProps {
  onLogoClick: () => void;
}
//TODO: Когда будет понятен какой функционал по скетчу - необходимо декомпозировать, слишком жирно.
// TODO: Также по скетчу не понятно какого размера лого и выносить его как отдебльный компонент не целесообразно, возможно тоит вообще отказаться от него.
const Footer: FC<FooterProps> = (props) => {
  const { onLogoClick = () => undefined } = props;
  return (
    <div className={classNames.root}>
      <div className={classNames.root_footer}>
        <div>
          <div className={classNames.root_leftBlock}>
            <LogoIcon
              height={35}
              width={40}
              color='#FFFFFF'
            />
          </div>
          <div className={classNames.root_cities}>
            <div>Krakow</div>
            <div>Amsterdam</div>
            <div>Bali</div>
            <div>Tula</div>
            <div>Moscow</div>
          </div>
        </div>
        <div className={classNames.root_rightBlock}>
          <div className={classNames.root_links}>
            {links.map((link) => (
              <div key={link.id}>{link.name}</div>
            ))}
          </div>
          <div className={classNames.root_logo_container}>
            <div className={classNames.root_logo}>
              <LogoIcon
                height={86}
                width={55}
                color='#FAFAFA7F'
              />
            </div>
            <div className={classNames.root_mainText}>
              <div className={classNames.root_text1}>Russian</div>
              <div className={classNames.root_text2}>
                University of Arts
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;