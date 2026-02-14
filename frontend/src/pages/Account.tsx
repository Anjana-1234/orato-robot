import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Account: React.FC = () => {
  return (
    <div className="page-wrapper bg-gray-100 min-h-screen">
      <Navbar isLoggedIn={true} />

      <main className="page-container max-w-6xl mx-auto px-4 py-8">

        {/* PAGE TITLE */}
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Account</h1>
        <p className="text-gray-500 mb-8">
          Manage your profile and learning preferences
        </p>

        {/* PROFILE CARD */}
        <div className="bg-white rounded-xl shadow p-6 mb-8">

          {/* TOP ROW */}
          <div className="flex justify-between items-start mb-6">

            {/* LEFT */}
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center text-white text-3xl font-bold">
                JD
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-800">John Doe</h2>
                <p className="text-gray-500">john.doe@example.com</p>
              </div>
            </div>

            {/* BUTTON */}
            <button className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100">
              Edit Profile
            </button>
          </div>

          {/* STATS ROW */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-500 text-sm">Total Study Time</p>
              <p className="font-bold text-xl">47.5 hours</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-500 text-sm">Current Level</p>
              <p className="font-bold text-xl">Intermediate</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-500 text-sm">Languages Learning</p>
              <p className="font-bold text-xl">1</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-500 text-sm">Lessons Completed</p>
              <p className="font-bold text-xl">47</p>
            </div>

          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default Account;















// Default code 

// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// const Account: React.FC = () => {
//   return (
//     <div className="page-wrapper">
//       <Navbar isLoggedIn={true} />
      
//       <main className="page-container flex justify-center items-center">
//         <h1 className="text-4xl font-bold text-text-dark mt-20 mb-10">Account Page</h1>
        
//       </main>
      
//       <Footer />
//     </div>
//   );
// };

// export default Account;

