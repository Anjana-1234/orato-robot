import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EditProfileModal from "../components/EditProfileModal";
import AddGoalModal from "../components/AddGoalModal";
import API from "../services/api";
import toast from "react-hot-toast";
import PageBackground from "../components/AccountPageBackground";

const Account: React.FC = () => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isAddGoalOpen, setIsAddGoalOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [uploading, setUploading] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [goals, setGoals] = useState<any[]>([]);
  const [editingGoal, setEditingGoal] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);

      setGoals([]);
    }
  }, []);

  // PROFILE PICTURE UPLOAD HANDLER
  const handleImageUpload = async (file: File) => {
    // 1️⃣ File size validation (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image must be under 5MB");
      return;
    }

    try {
      setUploading(true);

      const formData = new FormData();
      formData.append("image", file);

      const response = await API.post(
        "/users/upload-profile-picture",
        formData
      );

      const updatedUser = response.data.user;

      // Update state + localStorage
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));

      toast.success("Profile picture updated successfully!");

    } catch (error: any) {
      console.error("UPLOAD ERROR:", error?.response?.data || error);

      if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Image must be under 5MB");
      }

    } finally {
      setUploading(false);
    }
  };


  if (!user) {
    return <div className="p-10 text-center">Loading account...</div>;
  }



  const initials = user.fullName
    ? user.fullName
      .split(" ")
      .map((name: string) => name[0])
      .join("")
      .toUpperCase()
    : "U";


  return (
    <div className="page-wrapper">
      <Navbar isLoggedIn={true} />

      <PageBackground>
        <main className="max-w-6xl mx-auto px-4 py-10 space-y-8">

          {/* HEADER */}
          <div className="pb-3 border-b border-white/20">

            <h1 className="text-5xl font-bold text-white">
              Account
            </h1>

            <p className="text-white/80 text-lg">
              Manage your profile and learning preferences
            </p>
          </div>

          {/* PROFILE Section */}
          <section className="bg-white rounded-2xl shadow-md p-8">

            {/* TOP ROW */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">

              {/* LEFT SIDE */}
              <div className="flex items-start gap-6">

                {/* AVATAR WITH LOADING STATE */}
                <label className="group relative cursor-pointer">
                  {uploading ? (
                    <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center animate-pulse shadow-md">
                      <span className="text-sm text-gray-500">Uploading...</span>
                    </div>
                  ) : user.profilePicture ? (
                    <img
                      src={user.profilePicture}
                      alt="Profile"
                      className="w-24 h-24 rounded-full object-cover shadow-md 
transition-all duration-300 
group-hover:scale-105 group-hover:ring-4 group-hover:ring-emerald-400/40"                    />
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-green-500 flex items-center justify-center 
text-white text-4xl font-semibold shadow-md 
transition-all duration-300 
group-hover:scale-105 group-hover:ring-4 group-hover:ring-emerald-400/40">
                      {initials}
                    </div>
                  )}

                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    disabled={uploading}
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        handleImageUpload(e.target.files[0]);
                      }
                    }}
                  />

                  {!uploading && (
                    <div className="absolute bottom-0 right-0 bg-white border rounded-full w-8 h-8 flex items-center justify-center text-sm shadow hover:bg-gray-100 transition">
                      📷
                    </div>
                  )}

                </label>

                {/* Name + Email + Joined */}
                <div className="space-y-2">
                  <h2 className="text-3xl font-semibold text-gray-900">
                    {user.fullName}
                  </h2>

                  <p className="text-gray-500 text-sm">
                    {user.email}
                  </p>

                  <p className="text-sm text-gray-400">
                    Joined: {user.createdAt
                      ? new Date(user.createdAt).toLocaleDateString("en-LK", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                      : "N/A"}
                  </p>
                </div>
              </div>

              {/* EDIT BUTTON */}
              <button
                onClick={() => setIsEditOpen(true)}
                className="border border-gray-300 px-5 py-2 rounded-lg hover:bg-gray-100 transition font-medium self-start"
              >
                Edit Profile
              </button>
            </div>

            {/* Personal Overview */}
            <div
              onDoubleClick={() => setIsEditOpen(true)}
              className="group mt-10 bg-gray-50 rounded-xl p-6 border border-gray-100 hover:bg-gray-100 transition flex flex-col min-h-[20px]"            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  Personal Overview
                </h3>
                <p className="text-xs text-gray-400 mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Double click to edit
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                <p className="text-gray-700 leading-relaxed">
                  {user.bio || "Double click here to add a bio."}
                </p>
              </div>
            </div>

            {/* STATS */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

              {/* <div className="bg-gray-50 rounded-xl p-4 border"> */}
              <div className="bg-gray-50 rounded-xl p-4 border 
transition-all duration-300 
hover:-translate-y-1 hover:shadow-lg 
hover:border-emerald-400 cursor-pointer">
                <p className="text-lg">🎯</p>
                <p className="text-sm text-gray-500">Current Level</p>
                <p className="font-bold text-xl mt-1 text-gray-800">
                  {user.skillLevel || "Beginner"}
                </p>
              </div>

              {/* <div className="bg-gray-50 rounded-xl p-4 border"> */}
              <div className="bg-gray-50 rounded-xl p-4 border 
transition-all duration-300 
hover:-translate-y-1 hover:shadow-lg 
hover:border-emerald-400 cursor-pointer">
                <p className="text-lg">🌍</p>
                <p className="text-sm text-gray-500">Target Language</p>
                <p className="font-bold text-xl mt-1 text-gray-800">
                  {user.targetLanguage || "English"}
                </p>
              </div>

              {/* <div className="bg-gray-50 rounded-xl p-4 border"> */}
              <div className="bg-gray-50 rounded-xl p-4 border 
transition-all duration-300 
hover:-translate-y-1 hover:shadow-lg 
hover:border-emerald-400 cursor-pointer">
                <p className="text-lg">📘</p>
                <p className="text-sm text-gray-500">Daily Goal</p>
                <p className="font-bold text-xl mt-1 text-gray-800">
                  {user.dailyGoalMinutes || 15} min/day
                </p>
              </div>

              {/* <div className="bg-gray-50 rounded-xl p-4 border"> */}
              <div className="bg-gray-50 rounded-xl p-4 border 
transition-all duration-300 
hover:-translate-y-1 hover:shadow-lg 
hover:border-emerald-400 cursor-pointer">
                <p className="text-lg">🏆</p>
                <p className="text-sm text-gray-500">Assessment Score</p>
                <p className="font-bold text-xl mt-1 text-gray-800">
                  {user.assessmentScore || 0}
                </p>
              </div>

            </div>

          </section>

          {/* LANGUAGES SECTION */}
          <section className="bg-white rounded-2xl shadow-md p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                Languages
              </h2>

              <button
                onClick={() => setIsLanguageOpen(true)}
                className="text-emerald-600 font-semibold 
transition-all duration-200 ease-in-out 
hover:text-emerald-700 
hover:font-bold 
hover:scale-105
hover:tracking-wide"              >
                + Add Language
              </button>
            </div>

            <div
              onDoubleClick={() => setIsLanguageOpen(true)}
              className="group bg-gray-50 rounded-xl p-6 border cursor-pointer 
             hover:bg-gray-100 transition-all duration-200"
            >
              <p className="text-gray-800 font-semibold">
                Native Speaker → English
              </p>

              <p className="text-sm text-gray-500 mt-2">
                {user.skillLevel || "Beginner"}
              </p>

              {/* Hover hint */}
              <p className="text-xs text-gray-400 mt-3 opacity-0 
                group-hover:opacity-100 transition-opacity duration-200">
                Double click to add language
              </p>
            </div>
          </section>

          {/* Learning Goals */}
          <section className="bg-white rounded-2xl shadow-md p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                Learning Goals
              </h2>

              {goals.length < 3 && (
                <button
                  onClick={() => setIsAddGoalOpen(true)}
                  className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition"
                >
                  + Add Goal
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {goals.length === 0 && (
                <div className="col-span-full text-center py-12 text-gray-400">
                  No goals added yet.
                </div>
              )}

              {goals.map((goal) => {

                const progress = Math.min(
                  (goal.current / goal.target) * 100,
                  100
                );

                const today = new Date();
                const deadlineDate = new Date(goal.deadline);

                const isExpired = today > deadlineDate;
                const isCompleted = goal.current >= goal.target;

                return (
                  <div key={goal.id} className="bg-gray-50 rounded-xl p-6 border relative">
                    <button
                      onClick={() => setEditingGoal(goal)}
                      className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
                    >
                      ✏️
                    </button>

                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-gray-800">
                        {goal.title}
                      </h3>

                      {isCompleted && (
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded animate-fadeIn">
                          ✔ Completed
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-gray-500 mt-2">
                      Current: {goal.current}
                    </p>

                    <div className="mt-4 h-2 bg-gray-200 rounded-full">
                      <div
                        className={`h-2 rounded-full transition-all duration-1000 ease-out ${isCompleted ? "bg-green-500" : isExpired ? "bg-red-500" : "bg-emerald-500"
                          }`}
                        style={{ width: `${progress}%` }}
                      />
                    </div>

                    <div className="text-xs text-gray-400 mt-2">


                      {/* Expanding slider */}
                      <div className="overflow-hidden transition-all duration-300 max-h-0 group-hover:max-h-20">

                        <div className="mt-3 flex items-center gap-3">
                          <input
                            type="range"
                            min="1"
                            max={goal.id === 1 ? 100 : 60}
                            value={goal.target}
                            onChange={(e) => {
                              const newTarget = Number(e.target.value);
                              setGoals(prev =>
                                prev.map(g =>
                                  g.id === goal.id ? { ...g, target: newTarget } : g
                                )
                              );
                            }}
                            className="w-full accent-emerald-500"
                          />

                          <span className="w-8 text-right text-gray-700 text-sm">
                            {goal.target}
                          </span>
                        </div>

                      </div>

                    </div>


                    <p className="text-xs text-gray-400 mt-1">
                      Deadline: {deadlineDate.toLocaleDateString()}
                    </p>

                    {isExpired && !isCompleted && (
                      <p className="text-xs text-red-500 mt-1">
                        Goal expired
                      </p>
                    )}

                  </div>
                );
              })}


              {/* Goal 3 — Vocabulary Coming Soon */}
              <div className="bg-gray-50 rounded-xl p-6 border opacity-60 relative">
                <h3 className="font-semibold text-gray-800">
                  Learn 500 Vocabulary Words
                </h3>

                <p className="text-sm text-gray-500 mt-2">
                  Vocabulary tracking coming soon
                </p>

                <span className="absolute top-4 right-4 text-xs bg-gray-200 px-2 py-1 rounded">
                  Coming Soon
                </span>
              </div>

            </div>
          </section>

          {/* ACHIEVEMENT BADGES */}
          <section className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Achievements
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

              {/* STREAK BADGE */}
              <div className={`rounded-xl p-6 text-center border transition-all ${user.streak >= 7 ? "bg-yellow-50 border-yellow-400" : "bg-gray-50 opacity-50"
                }`}>
                <div className="text-3xl mb-2">🔥</div>
                <h3 className="font-semibold">7-Day Streak</h3>
                <p className="text-xs text-gray-500 mt-2">
                  Maintain 7 days streak
                </p>
              </div>

              {/* HIGH SCORE BADGE */}
              <div className={`rounded-xl p-6 text-center border transition-all ${user.assessmentScore >= 80 ? "bg-green-50 border-green-400" : "bg-gray-50 opacity-50"
                }`}>
                <div className="text-3xl mb-2">🏆</div>
                <h3 className="font-semibold">High Performer</h3>
                <p className="text-xs text-gray-500 mt-2">
                  Score 80+ in assessment
                </p>
              </div>

              {/* GOAL COMPLETION BADGE */}
              <div className={`rounded-xl p-6 text-center border transition-all ${goals.filter(g => g.current >= g.target).length >= 1
                  ? "bg-blue-50 border-blue-400"
                  : "bg-gray-50 opacity-50"
                }`}>
                <div className="text-3xl mb-2">🎯</div>
                <h3 className="font-semibold">Goal Achiever</h3>
                <p className="text-xs text-gray-500 mt-2">
                  Complete 1 goal
                </p>
              </div>

              {/* SKILL LEVEL BADGE */}
              <div className={`rounded-xl p-6 text-center border transition-all ${user.skillLevel === "Advanced"
                  ? "bg-purple-50 border-purple-400"
                  : "bg-gray-50 opacity-50"
                }`}>
                <div className="text-3xl mb-2">🚀</div>
                <h3 className="font-semibold">Advanced Speaker</h3>
                <p className="text-xs text-gray-500 mt-2">
                  Reach Advanced level
                </p>
              </div>

            </div>
          </section>

        </main>
      </PageBackground>

      <Footer />

      {isEditOpen && (
        <EditProfileModal
          onClose={() => setIsEditOpen(false)}
          onProfileUpdate={(updatedUser: any) => {
            setUser(updatedUser);
            localStorage.setItem("user", JSON.stringify(updatedUser));
          }}
        />
      )}

      {isAddGoalOpen && (
        <AddGoalModal
          onClose={() => setIsAddGoalOpen(false)}
          onAdd={(newGoal: any) => {
            if (goals.length >= 3) {
              toast.error("You can only add up to 3 goals.");
              return;
            }

            setGoals(prev => [
              ...prev,
              {
                id: Date.now(),
                current: 0,
                ...newGoal
              }
            ]);

            toast.success("Goal added successfully!");
            setIsAddGoalOpen(false);
          }}
        />
      )}

      {isLanguageOpen && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          onClick={() => setIsLanguageOpen(false)}   // closes when clicking outside
        >
          <div
            className="bg-white rounded-2xl shadow-xl w-[400px] p-6 space-y-4 animate-scaleIn"
            onClick={(e) => e.stopPropagation()}     // prevents closing when clicking inside
          >
            <h3 className="text-xl font-semibold">Add Language</h3>

            {/* English (selected) */}
            <div className="border rounded-lg p-4 bg-emerald-50 border-emerald-400">
              <p className="font-semibold text-gray-800">English</p>
              <p className="text-xs text-gray-500">Already selected</p>
            </div>

            {/* Sinhala */}
            <div className="border rounded-lg p-4 opacity-60 cursor-not-allowed relative">
              <p className="font-semibold text-gray-800">Sinhala</p>
              <span className="absolute top-2 right-2 text-xs bg-gray-200 px-2 py-1 rounded">
                Coming soon
              </span>
            </div>

            {/* Tamil */}
            <div className="border rounded-lg p-4 opacity-60 cursor-not-allowed relative">
              <p className="font-semibold text-gray-800">Tamil</p>
              <span className="absolute top-2 right-2 text-xs bg-gray-200 px-2 py-1 rounded">
                Coming soon
              </span>
            </div>

            <button
              onClick={() => setIsLanguageOpen(false)}
              className="w-full bg-gray-100 rounded-lg py-2 mt-4 hover:bg-gray-200 transition"
            >
              Close
            </button>

          </div>

        </div>
      )}

      {editingGoal && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          onClick={() => setEditingGoal(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-xl w-[420px] p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-semibold">Edit Goal</h3>

            <div>
              <label className="text-sm text-gray-600">Title</label>
              <input
                type="text"
                value={editingGoal.title}
                onChange={(e) =>
                  setEditingGoal({
                    ...editingGoal,
                    title: e.target.value,
                  })
                }
                className="w-full border rounded-lg px-3 py-2 mt-1"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Target</label>
              <input
                type="number"
                value={editingGoal.target}
                onChange={(e) =>
                  setEditingGoal({
                    ...editingGoal,
                    target: Number(e.target.value),
                  })
                }
                className="w-full border rounded-lg px-3 py-2 mt-1"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Deadline</label>
              <input
                type="date"
                value={editingGoal.deadline}
                onChange={(e) =>
                  setEditingGoal({
                    ...editingGoal,
                    deadline: e.target.value,
                  })
                }
                className="w-full border rounded-lg px-3 py-2 mt-1"
              />
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <button
                onClick={() => setEditingGoal(null)}
                className="px-4 py-2 bg-gray-100 rounded-lg"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  setGoals((prev) =>
                    prev.map((g) =>
                      g.id === editingGoal.id ? editingGoal : g
                    )
                  );
                  setEditingGoal(null);
                  toast.success("Goal updated successfully!");
                }}
                className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );


};


export default Account;