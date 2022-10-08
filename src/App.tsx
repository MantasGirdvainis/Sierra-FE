import { useQuery } from 'react-query';
import { fetchStatus } from 'api/health';
import { MyMoviesLogo } from 'components/Icons';
import Layout from 'components/Layout/Layout';

import styles from './App.module.css';

function App(): JSX.Element {
  const { data: healthy } = useQuery('status', fetchStatus);

  return (
    <Layout
      footer={<>Footer</>}
      header={
        <>
          <MyMoviesLogo className={styles.icon} />
          Header
        </>
      }
    >
      <p>API Status: {healthy ? 'Is running' : 'Something is wrong!'}</p>
    </Layout>
  );
}

export default App;
