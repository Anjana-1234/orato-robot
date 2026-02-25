import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import OurMission from '../components/OurMission';
import DifferentUs from '../components/DifferentUs';
import MeetOurTeam from '../components/OurTeam';
import PoweredByTechnology from '../components/TechnologyUs';
import { FaArrowUp } from 'react-icons/fa';

const AboutUs: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="page-wrapper">
      <Navbar isLoggedIn={false} />

      <main className="bg-[#f0faf6] min-h-screen relative">
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
        <PoweredByTechnology />

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 p-4 rounded-2xl bg-[#1a9e6b] text-white shadow-[0_10px_30px_rgba(26,158,107,0.3)] hover:bg-[#14c781] hover:scale-110 active:scale-95 transition-all duration-500 z-50 group ${showScrollTop ? 'translate-y-0 opacity-100 visible' : 'translate-y-20 opacity-0 invisible'
            }`}
          aria-label="Scroll to top"
        >
          <span className="flex items-center justify-center group-hover:-translate-y-1 transition-transform duration-300">
            <FaArrowUp size={20} />
          </span>

          {/* Tooltip */}
          <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#0d2d2a] text-white text-xs py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            Back to Top
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-x-4 border-x-transparent border-t-4 border-t-[#0d2d2a]"></span>
          </span>
        </button>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;