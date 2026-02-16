import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EditProfileModal from "../components/EditProfileModal";

const Account: React.FC = () => {
  const [isEditOpen, setIsEditOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar isLoggedIn={true} />

      <main className="max-w-6xl mx-auto px-4 py-10 space-y-8">

        {/* HEADER */}
        <div className="pb-3 border-b border-gray-200">
          <h1 className="text-4xl font-bold tracking-tight text-gray-800">
            Account
          </h1>
          <p className="text-gray-500 mt-1">
            Manage your profile and learning preferences
          </p>
        </div>

        {/* PROFILE CARD */}
        <section className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-lg transition duration-300">

          <div className="flex flex-wrap justify-between items-start gap-4 mb-6">

            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center text-white text-3xl font-bold shadow">
                  JD
                </div>

                <div className="absolute -bottom-1 -right-1 bg-white border rounded-full w-7 h-7 flex items-center justify-center text-xs shadow">
                  📷
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-800">John Doe</h2>
                <p className="text-gray-500">john.doe@example.com</p>
              </div>
            </div>

            {/* EDIT BUTTON */}
            <button
              onClick={() => setIsEditOpen(true)}
              className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 transition font-medium"
            >
              Edit Profile
            </button>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              ["📘", "Total Study Time", "47.5 hours"],
              ["🎯", "Current Level", "Intermediate"],
              ["🌍", "Languages Learning", "1"],
              ["🏆", "Lessons Completed", "47"],
            ].map(([icon, label, value]) => (
              <div
                key={label}
                className="bg-gray-50 rounded-xl p-4 border border-gray-100 hover:bg-gray-100 transition"
              >
                <p className="text-lg">{icon}</p>
                <p className="text-sm text-gray-500">{label}</p>
                <p className="font-bold text-xl mt-1 text-gray-800">{value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* MAIN GRID */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* LEARNING GOALS */}
          <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-lg transition duration-300">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-gray-800">Learning Goals</h3>
              <button className="text-sm font-medium text-green-600 hover:underline">
                + Add Goal
              </button>
            </div>
          </div>

          {/* LANGUAGES */}
          <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Languages</h3>
          </div>
        </section>

        {/* BADGES */}
        <section className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-lg transition duration-300">
          <h3 className="text-2xl font-bold text-gray-800">
            Achievements & Badges
          </h3>
        </section>

      </main>

      <Footer />

      {/* MODAL */}
      {isEditOpen && (
        <EditProfileModal onClose={() => setIsEditOpen(false)} />
      )}
    </div>
  );
};

export default Account;