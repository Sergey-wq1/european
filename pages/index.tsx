import { NextPageWithLayout } from '../src/types/next';
import getMainLayout from '../src/helpers/getMainLayout';
import Landing from '../src/containers/Landing/Landing';

const Home: NextPageWithLayout = () => {
  return (
    <Landing />
  );
};

Home.getLayout = getMainLayout;

export default Home;
