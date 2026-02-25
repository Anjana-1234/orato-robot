import React from "react";
import { FaHeart } from "react-icons/fa";

/**
 * Statistics data to be displayed in the mission section grid.
 */
const stats = [
    { value: "5M+", label: "Active Learners" },
    { value: "25+", label: "Languages" },
    { value: "10K+", label: "Lessons" },
    { value: "150+", label: "Countries" },
];

/**
 * OurMission component displays the organization's core values, mission statement,
 * and key performance metrics in a responsive layout.
 */
const OurMission: React.FC = () => {
    return (
        <section className="bg-[#f0faf6] py-16 px-10">
            <div className="max-w-6xl mx-auto bg-[#d6f5eb] rounded-3xl p-12 flex flex-col md:flex-row gap-12 items-center">

                {/* Left Column: Contains the mission header and descriptive text.
                */}
                <div className="flex-1">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="bg-[#1a9e6b] rounded-2xl w-14 h-14 flex items-center justify-center shrink-0">
                            <FaHeart size={24} color="white" />
                        </span>
                        <h2 className="text-3xl font-bold text-[#0d2d2a]">Our Mission</h2>
                    </div>
                    <p className="text-[#2d4a42] leading-relaxed mb-4">
                        At ORATO, we believe that language learning should be fun, interactive, and accessible
                        to everyone. Our mission is to break down language barriers and connect people across
                        cultures through innovative technology and engaging content.
                    </p>
                    <p className="text-[#2d4a42] leading-relaxed">
                        We combine cutting-edge AI, gamification, and proven educational methods to create a
                        learning experience that adapts to your needs and keeps you motivated every step of the way.
                    </p>
                </div>

                {/* Right Column: 2x2 grid displaying impact statistics.
                */}
                <div className="grid grid-cols-2 gap-4 shrink-0">
                    {stats.map((s) => (
                        <div key={s.label} className="bg-white rounded-2xl px-7 py-6 flex flex-col gap-1 shadow-sm min-w-[130px]">
                            <span className="text-3xl font-extrabold text-[#1a9e6b]">{s.value}</span>
                            <span className="text-sm text-[#6b8f84]">{s.label}</span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default OurMission;