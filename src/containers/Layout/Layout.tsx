import { FC, ReactNode, useCallback } from 'react';
import classNames from './Layout.module.scss';
import Navbar from './components/Navbar/Navbar';
import { useRouter } from 'next/router';
import Footer from './components/Footer/Footer';

export interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const router = useRouter();

  const logoHandler = useCallback(() => {
    router.reload();
  }, []);

  return (
    <div className={classNames.root}>
      <Navbar onLogoClick={logoHandler} />
      <div>{children}</div>
      <Footer onLogoClick={logoHandler}/>
    </div>
  );
};

export default Layout;
