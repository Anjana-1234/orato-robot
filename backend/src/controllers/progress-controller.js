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

// GET: Fetch progress data for a specific user
export const getProgress = async (req, res) => {
  try {
    const userId = req.params.userId;

    console.log(`Fetching progress for user: ${userId}`);

    const userData = mockDatabase[userId];

    if (!userData) {
      return res.status(404).json({ message: "User not found" });
    }

    // Send the data back to the React frontend
    const mockData = {
      lessons: userData.lessons || [],
      stats: userData.stats || [],
      activities: userData.activities || []
    };

    res.status(200).json(mockData);

  } catch (error) {
    console.error("Error fetching progress:", error);
    res.status(500).json({ 
      success: false,
      message: "Internal server error" 
    });
  }
};