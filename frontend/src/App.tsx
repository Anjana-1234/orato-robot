import { useEffect } from 'react';
import { gsap } from 'gsap';
import './App.css';

// Components
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatsGrid from './components/StatsGrid';
import ContinueLearning from './components/ContinueLearning';
import DailyChallenges from './components/DailyChallenges';
import SkillProgress from './components/SkillProgress';
import RecentAchievements from './components/RecentAchievements';

function App() {
  useEffect(() => {
    // Register GSAP plugins if needed
    gsap.config({
      nullTargetWarn: false,
    });

    // Initial page load animation
    gsap.fromTo(
      '.main-content',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power2.out' }
    );
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="main-content ml-[260px] min-h-screen">
        <div className="p-6 lg:p-8">
          {/* Header */}
          <Header />

          {/* Stats Grid */}
          <div className="mb-6">
            <StatsGrid />
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* Left Column - Main Content */}
            <div className="xl:col-span-2 space-y-6">
              {/* Continue Learning */}
              <ContinueLearning />

              {/* Daily Challenges */}
              <DailyChallenges />
            </div>

            {/* Right Column - Sidebar Content */}
            <div className="space-y-6">
              {/* Skill Progress */}
              <SkillProgress />

              {/* Recent Achievements */}
              <RecentAchievements />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
