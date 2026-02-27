const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
// CORS allows your React frontend (running on a different port) to fetch data from this backend
app.use(cors()); 
app.use(express.json());

// --- MOCK DATABASE ---
// In a real production app, this data would come from a real database.
const mockDatabase = {
  'user-123': {
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
  }
};
// --- API ROUTES ---

// GET: Fetch progress data for a specific user
app.get('/api/progress/:userId', (req, res) => {
  try {
    const userId = req.params.userId;
    
    // Simulate a slight network delay so you can see the loading spinner on the frontend!
    setTimeout(() => {
      const userData = mockDatabase[userId];

      if (!userData) {
        return res.status(404).json({ message: "User not found" });
      }

      // Send the data back to the React frontend
      res.status(200).json(userData);
      
    }, 800); // 800ms delay

  } catch (error) {
    console.error("Error fetching progress data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// A simple health check route
app.get('/health', (req, res) => {
  res.status(200).json({ status: "Orato Backend is running perfectly! 🚀" });
});

// --- START SERVER ---
app.listen(PORT, () => {
  console.log(`=================================`);
  console.log(`Orato Backend Server Started!`);
  console.log(`Listening on http://localhost:${5000}`);
  console.log(`=================================`);
});

export const getProgress = async (req, res) => {
  try {
    const userId = req.params.userId;

    console.log(`Fetching progress for user: ${userId}`);

    // Simulate network delay
    setTimeout(() => {
      const mockData = {
        lessons: [
          { id: 1, title: 'English Grammar: Present Tense', language: 'English', icon: '📚', date: '2026-02-09', time: '14:30', score: 95, duration: '18 min', points: 120 },
          { id: 2, title: 'English Vocabulary: Common Phrases', language: 'English', icon: '📖', date: '2026-02-08', time: '10:15', score: 88, duration: '22 min', points: 100 },
        ],
        stats: [
          { day: 'Mon', lessons: 2, points: 200 },
          { day: 'Tue', lessons: 3, points: 320 },
          { day: 'Wed', lessons: 1, points: 150 },
        ],
        activities: [
          { id: 1, type: 'achievement', title: 'Earned "Week Warrior" badge', time: '2 hours ago', icon: '🏆' },
          { id: 2, type: 'lesson', title: 'Completed English Grammar', time: '3 hours ago', icon: '📚' },
        ]
      };

      res.status(200).json(mockData);
    }, 800);

  } catch (error) {
    console.error("Error fetching progress:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};