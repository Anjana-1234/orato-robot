import React from "react";
import { MdLanguage, MdTrackChanges } from "react-icons/md";
import { FaTrophy, FaUsers } from "react-icons/fa";

const features = [
    {
        icon: <MdLanguage size={28} />,
        title: "Multiple Languages",
        desc: "Learn Spanish, French, German, and many more languages with comprehensive and immersive lessons.",
    },
    {
        icon: <MdTrackChanges size={28} />,
        title: "Personalized Learning",
        desc: "Set your own goals and learn at your own pace with adaptive difficulty tailored to your progress.",
    },
    {
        icon: <FaTrophy size={24} />,
        title: "Gamification",
        desc: "Earn points, unlock special badges, and compete on global leaderboards to stay motivated.",
    },
    {
        icon: <FaUsers size={24} />,
        title: "Community Support",
        desc: "Join millions of learners worldwide and practice with native speakers in a safe environment.",
    },
];

const WhatMakesUsDifferent: React.FC = () => {
    return (
        <section className="bg-[#f8fffe] py-16 md:py-24 px-6 md:px-10">
            <div className="max-w-6xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a9e6b]/10 text-[#1a9e6b] text-xs font-bold uppercase tracking-widest mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1a9e6b] animate-pulse"></span>
                        The Orato Difference
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-[#0d2d2a] tracking-tight">
                        What Makes Us <span className="text-[#1a9e6b]">Different</span>
                    </h2>
                    <div className="mt-6 mx-auto w-12 h-1 rounded-full bg-gradient-to-r from-[#1a9e6b] to-[#0dd68a]"></div>
                </div>

                {/* Features Grid - Clean 2x2 layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((f) => (
                        <div
                            key={f.title}
                            className="group relative bg-white rounded-[2.5rem] p-10 flex gap-8 items-start border border-[#e0f3eb] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(26,158,107,0.1)] hover:-translate-y-1.5"
                        >
                            {/* Icon Container with the Squircle + Offset frame style to match team section */}
                            <div className="relative shrink-0 pt-2">
                                <div className="absolute -inset-2 border border-dashed border-[#1a9e6b]/30 rounded-[1.2rem] group-hover:border-[#1a9e6b]/60 group-hover:rotate-12 transition-all duration-500"></div>
                                <div className="w-16 h-16 rounded-[1.1rem] bg-[#f0faf6] flex items-center justify-center text-[#1a9e6b] shadow-sm relative z-10 bg-white group-hover:bg-[#1a9e6b] group-hover:text-white transition-all duration-500">
                                    {f.icon}
                                </div>
                            </div>

                            {/* Text Content */}
                            <div>
                                <h3 className="text-xl font-bold text-[#0d2d2a] mb-3 group-hover:text-[#1a9e6b] transition-colors duration-300">
                                    {f.title}
                                </h3>
                                <p className="text-[#5a7a72] text-base leading-relaxed">
                                    {f.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatMakesUsDifferent;