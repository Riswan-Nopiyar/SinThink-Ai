import React from 'react';
import Layout from '../layouts/Layout';
import { ToastContainer } from 'react-toastify';
import IntroSection from '../components/IntroSection';
import CardAiList from '../components/CardAiList';
import TerminalWrapper from '../components/TerminalWrapper';

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
      <IntroSection />
      <CardAiList />
      <TerminalWrapper />
    </Layout>
    </>
  );
};

export default Home;