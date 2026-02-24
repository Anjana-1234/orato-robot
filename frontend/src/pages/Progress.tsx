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

