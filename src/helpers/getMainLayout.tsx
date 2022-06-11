import { ReactElement } from 'react';
import Layout from '../containers/Layout/Layout';

const getMainLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default getMainLayout;
