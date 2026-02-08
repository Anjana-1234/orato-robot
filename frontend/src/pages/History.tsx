import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const History: React.FC = () => {
  return (
    <div className="page-wrapper">
      <Navbar isLoggedIn={true} />
      
      <main className="page-container flex justify-center items-center">
        <h1 className="text-4xl font-bold text-text-dark mt-10 mb-10">History Page</h1>
      </main>
      
      <Footer />
    </div>
  );
};

export default History;