import { useState, useEffect, useMemo } from 'react';
import { 
  Calendar, 
  BookOpen, 
  Trophy, 
  Clock, 
  Star, 
  TrendingUp,
  ChevronRight,
  Loader2 // Added for loading state
} from 'lucide-react';

// --- TYPES ---
interface Lesson {
  id: number;
  title: string;
  language: string;
  icon: string;
  date: string;
  time: string;
  score: number;
  duration: string;
  points: number;
}

interface StatItem {
  day: string;
  lessons: number;
  points: number;
}

interface Activity {
  id: number;
  type: string;
  title: string;
  time: string;
  icon: string;
}

interface ProgressProps {
  darkMode: boolean;
}

// --- SUB-COMPONENTS ---

const StatCard = ({ icon: Icon, value, label, colorClass, darkMode }: any) => (
  <div className={`rounded-2xl p-6 transition-all duration-300 border hover:scale-[1.02] ${
    darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-100 shadow-sm'
  }`}>
    <div className="flex items-center gap-4">
      <div className={`p-3 rounded-xl ${colorClass}`}>
        <Icon size={24} />
      </div>
      <div>
        <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{value}</h3>
        <p className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{label}</p>
      </div>
    </div>
  </div>
);

export default function Progress({ darkMode }: ProgressProps) {
  // --- STATE MANAGEMENT ---
  const [completedLessons, setCompletedLessons] = useState<Lesson[]>([]);
  const [weeklyStats, setWeeklyStats] = useState<StatItem[]>([]);
  const [recentActivities, setRecentActivities] = useState<Activity[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // --- DATA FETCHING LOGIC ---
  useEffect(() => {
    // This is where you will connect to your Node.js/Express backend
    const fetchProgressData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // TODO: Replace this block with your actual API call
        // const response = await fetch('/api/progress/user-123');
        // const data = await response.json();
        
        // Simulating a network request delay (1.5 seconds)
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Mock data representing the backend response
        const mockBackendResponse = {
          lessons: [
            { id: 1, title: 'English Grammar: Present Tense', language: 'English', icon: '📚', date: '2026-02-09', time: '14:30', score: 95, duration: '18 min', points: 120 },
            { id: 2, title: 'English Vocabulary: Common Phrases', language: 'English', icon: '📖', date: '2026-02-08', time: '10:15', score: 88, duration: '22 min', points: 100 },
            { id: 3, title: 'English Pronunciation Guide', language: 'English', icon: '🗣️', date: '2026-02-08', time: '09:00', score: 92, duration: '15 min', points: 110 },
          ],
          stats: [
            { day: 'Mon', lessons: 2, points: 200 },
            { day: 'Tue', lessons: 3, points: 320 },
            { day: 'Wed', lessons: 1, points: 150 },
            { day: 'Thu', lessons: 2, points: 210 },
            { day: 'Fri', lessons: 4, points: 450 },
            { day: 'Sat', lessons: 1, points: 120 },
            { day: 'Sun', lessons: 2, points: 230 },
          ],
          activities: [
            { id: 1, type: 'achievement', title: 'Earned "Week Warrior" badge', time: '2 hours ago', icon: '🏆' },
            { id: 2, type: 'lesson', title: 'Completed English Grammar', time: '3 hours ago', icon: '📚' },
            { id: 3, type: 'streak', title: '15-day streak maintained!', time: '1 day ago', icon: '🔥' },
          ]
        };

        // Setting the state with data from "backend"
        setCompletedLessons(mockBackendResponse.lessons);
        setWeeklyStats(mockBackendResponse.stats);
        setRecentActivities(mockBackendResponse.activities);

      } catch (err) {
        console.error("Failed to fetch progress data:", err);
        setError("Unable to load progress data. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProgressData();
  }, []); // Empty dependency array means this runs once when the component mounts

  // --- DERIVED STATE (Calculations) ---
  const maxLessons = useMemo(() => {
    if (weeklyStats.length === 0) return 1; // Prevent division by zero
    return Math.max(...weeklyStats.map((d) => d.lessons));
  }, [weeklyStats]);

  const avgScore = useMemo(() => {
    if (completedLessons.length === 0) return 0;
    const total = completedLessons.reduce((acc, curr) => acc + curr.score, 0);
    return Math.round(total / completedLessons.length);
  }, [completedLessons]);