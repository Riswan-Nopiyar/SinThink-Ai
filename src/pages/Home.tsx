import React from 'react';
import IntroSection from '../components/IntroSection';
import Layout from '../layouts/Layout';
import { ToastContainer } from 'react-toastify';

const Home: React.FC = () => {
  return (
    <> 
      <ToastContainer
       position="bottom-left" 
       autoClose={3000} 
       closeOnClick 
       pauseOnHover 
       />
    <Layout>
      <IntroSection/>
    </Layout>
    </>
  );
};

export default Home;