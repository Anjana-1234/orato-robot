import { useState } from 'react';
import AccountSettings from './components/AccountSettings';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Language from './components/Language';
import AppPreferences from './components/AppPreferences';
import Notifications from './components/Notifications';
import Security from './components/Security';
import RecommendedSettings from './components/RecommendedSettings';
import { Bot } from 'lucide-react';

export default function App() {
  // To track which tab the user is currently viewing
  const [activeTab, setActiveTab] = useState('Language & Region');

  // For handle switching between different setup views
  const renderContent = () => {
    switch (activeTab) {
      case 'Account Settings':
        return <AccountSettings />;
      case 'Language & Region':
        return <Language />;

      case 'App Preferences':
        return <AppPreferences />;

      case 'Notifications':
        return <Notifications />;

      case 'Security & Privacy':
        return <Security />;

      case 'Recommended Settings':
        return <RecommendedSettings />;

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9ff] flex flex-col antialiased">
      {/* Top navigation bar */}
      <Navbar />

      <main className="max-w-[1400px] mx-auto w-full px-12 py-10 flex gap-12">
        {/* Left Sidebar - Contains the page title and navigation links */}
        <div className="shrink-0 space-y-8">
          <div>
            <div className="flex items-center gap-4 mb-2">
              <div className="bg-indigo-600 p-2 rounded-xl shadow-lg">
                <Bot className="text-white w-6 h-6" />
              </div>
              <h1 className="text-2xl font-bold text-slate-800">Settings</h1>
            </div>
            <p className="text-slate-500 text-sm ml-12">Manage account & app preferences</p>
          </div>

          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        {/* Right Content Area - Displays the selected tab's content */}
        <div className="flex-1 space-y-8">
          <h2 className="text-lg font-bold text-slate-700 ml-2">{activeTab}</h2>
          {renderContent()}
        </div>
      </main>
    </div>
  );
}