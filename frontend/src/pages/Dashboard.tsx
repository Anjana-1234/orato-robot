import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SpeakingCoach from '../components/SpeakingCoach';

const Dashboard: React.FC = () => {
  return (
    <div className="page-wrapper">
      <Navbar isLoggedIn={true} />

      <main className="page-container flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-text-dark mt-20 mb-10">
          Dashboard Page
        </h1>

        {/* ✅ ADD THIS */}
        <div className="w-full max-w-4xl px-4 mb-16">
          <SpeakingCoach />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;