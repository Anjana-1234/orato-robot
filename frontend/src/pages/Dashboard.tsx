import { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import { gsap } from 'gsap';

// Components
//import Sidebar from '../components/Sidebar';
//import Header from '../components/Header';
//import StatsGrid from '../components/StatsGrid';
import ContinueLearning from '../components/ContinueLearning';
//import DailyChallenges from '../components/DailyChallenges';
//import SkillProgress from '../components/SkillProgress';
//import RecentAchievements from '../components/RecentAchievements';

// Icons
import { 
  Loader2
} from 'lucide-react';

export default function Dashboard() {
  const darkMode = false;
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    // GSAP animation
    gsap.config({
      nullTargetWarn: false,
    });

    gsap.fromTo(
      '.main-content',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power2.out' }
    );

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className={`min-h-screen flex flex-col items-center justify-center ${darkMode ? 'bg-gray-900 text-white' : 'bg-[#F8FAFC] text-gray-900'}`}>
        <Loader2 className="w-12 h-12 text-green-500 animate-spin mb-4" />
        <h2 className="text-xl font-semibold">Loading dashboard...</h2>
      </div>
    );
  }

  return (
    <div className={`flex flex-col min-h-screen ${darkMode ? 'text-white' : 'text-gray-900'}`}>
      <div className={`flex-1 ${darkMode ? 'bg-gray-900' : 'bg-[#F8FAFC]'}`}>
        
        <Navbar />

        <div className="flex min-h-screen">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <main className="main-content flex-1 ml-[260px] p-6 lg:p-8">
            <Header />

            <div className="mb-6">
              <StatsGrid />
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              {/* Left Column */}
              <div className="xl:col-span-2 space-y-6">
                <ContinueLearning />
                <DailyChallenges />
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <SkillProgress />
                <RecentAchievements />
              </div>
            </div>
          </main>
        </div>

      </div>

      <Footer />
    </div>
  );
}