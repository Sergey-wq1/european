import { NextPageWithLayout } from '../src/types/next';
import getMainLayout from '../src/helpers/getMainLayout';

const Home: NextPageWithLayout = () => {
  return <div></div>;
};

Home.getLayout = getMainLayout;

export default Home;
