import Layout from 'components/Layout/Layout';
import Header from 'components/Header/header';
import { BrowserRouter } from 'react-router-dom';
import MainRouter from 'navigation/MainRouter';
import ProfileProvider from 'providers/ProfileProvider';

import Footer from './components/Footer/footer';


function App(): JSX.Element {

  return (
    <BrowserRouter>
      <ProfileProvider>
        <Layout footer={<Footer />} header={<Header />}>
          <MainRouter />
        </Layout>
      </ProfileProvider>
    </BrowserRouter>
  );
}

export default App;
