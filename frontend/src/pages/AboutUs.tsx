import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import OurMission from '../components/OurMission';
import DifferentUs from '../components/DifferentUs';
import MeetOurTeam from '../components/OurTeam';

const AboutUs: React.FC = () => {
  return (
    <div className="page-wrapper">
      <Navbar isLoggedIn={false} />

      <main className="bg-[#f0faf6] min-h-screen">
        {/* Page Header */}
        <header className="text-center pt-20 pb-10 px-10 bg-[#f0faf6]">
          <h1 className="text-5xl font-black text-[#0d2d2a] mb-4 tracking-tight">About ORATO</h1>
          <p className="text-lg text-[#4a7060] max-w-xl mx-auto leading-relaxed">
            Making language learning accessible, engaging, and effective for everyone around the world.
          </p>
        </header>
        <OurMission />
        <DifferentUs />
        <MeetOurTeam />
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;