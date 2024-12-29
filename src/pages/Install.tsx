import React from 'react';
import TerminalWrapper from '../components/TerminalWrapper';
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
        <section className="mx-2 md:mx-10">
      <TerminalWrapper/>
            </section>
    </Layout>
    </>
  );
};

export default Home;