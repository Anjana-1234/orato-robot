import React from "react";
import { FaGlobeAmericas, FaBookReader, FaUserFriends, FaChartLine, FaStar } from "react-icons/fa";

/**
 * Statistics data to be displayed in the mission section.
 */
const stats = [
    { value: "12 Min", label: "Avg. Daily Practice", icon: <FaUserFriends size={20} /> },
    { value: "1.8M+", label: "Conversations Practiced", icon: <FaGlobeAmericas size={20} /> },
    { value: "87K+", label: "Careers Advanced", icon: <FaBookReader size={20} /> },
    { value: "4.9", hasStar: true, label: "Learner Satisfaction", icon: <FaChartLine size={20} /> },
];

/**
 * OurMission component - Luxury Edition
 * A highly creative, professional, and immersive layout.
 */
const OurMission: React.FC = () => {
    return (
        <section className="relative py-24 px-6 md:px-10 overflow-hidden bg-[#f8fffe]">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-stretch">

                    {/* Left Side: Content & Image Overlap */}
                    <div className="flex-1 relative">
                        <div className="relative z-20 max-w-2xl">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1a9e6b]/10 text-[#1a9e6b] text-xs font-bold uppercase tracking-[0.2em] mb-8 border border-[#1a9e6b]/20">
                                <span className="w-2 h-2 rounded-full bg-[#1a9e6b] animate-ping" />
                                Our Infinite Purpose
                            </div>

                            <h2 className="text-4xl md:text-5xl font-black text-[#0d2d2a] tracking-tight leading-[1.1] mb-10">
                                Our <span className="text-[#1a9e6b]">Mission</span>
                            </h2>

                            <div className="space-y-8 text-lg">
                                <p className="text-[#2d4a42] leading-relaxed font-medium bg-white/40 backdrop-blur-sm p-6 rounded-3xl border border-white/60 shadow-sm border-l-4 border-l-[#1a9e6b]">
                                    At <span className="text-[#1a9e6b] font-bold">ORATO</span>, we believe that language learning should be fun, interactive, and accessible to everyone. Our mission is to break down language barriers and connect people across cultures through innovative technology and engaging content.
                                </p>

                                <p className="text-[#5a7a72] leading-relaxed">
                                    We combine cutting-edge AI, gamification, and proven educational methods to create a learning experience that adapts to your needs and keeps you motivated every step of the way.                                </p>
                            </div>

                            {/* Decorative element */}
                            <div className="mt-12 flex items-center gap-8">
                                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#1a9e6b]/20 to-transparent" />
                                <div className="w-3 h-3 rounded-full border-2 border-[#1a9e6b] animate-bounce" />
                                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#1a9e6b]/20 to-transparent" />
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Luxury Stats Cards */}
                    <div className="lg:w-[600px] xl:w-[700px] shrink-0">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 relative">

                            {/* Floating decorative card */}
                            <div className="hidden lg:block absolute -left-20 top-1/2 -translate-y-1/2 w-40 h-80 border border-[#1a9e6b]/10 rounded-[4rem] -z-0 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-[2px]" />

                            {stats.map((s) => (
                                <div
                                    key={s.label}
                                    className="group relative bg-white/80 backdrop-blur-md rounded-[2.5rem] p-6 md:p-8 border border-white/60 shadow-[0_10px_40px_rgba(26,158,107,0.05)] hover:shadow-[0_25px_60px_rgba(26,158,107,0.1)] transition-all duration-700 flex flex-col items-center gap-4 md:gap-6 hover:-translate-y-2 overflow-hidden"
                                >
                                    {/* Animated background gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#1a9e6b]/0 via-transparent to-[#0dd68a]/0 group-hover:from-[#1a9e6b]/5 group-hover:to-[#0dd68a]/5 transition-all duration-700" />

                                    <div className="relative shrink-0 pt-1">
                                        <div className="absolute -inset-2 border-2 border-dashed border-[#1a9e6b]/20 rounded-2xl group-hover:border-[#1a9e6b]/50 group-hover:rotate-12 transition-all duration-700" />
                                        <div className="w-14 h-14 rounded-2xl bg-white border border-[#e0f3eb] flex items-center justify-center text-[#1a9e6b] shadow-sm relative z-10 group-hover:bg-[#1a9e6b] group-hover:text-white transition-all duration-500">
                                            {s.icon}
                                        </div>
                                    </div>

                                    <div className="relative z-10 text-center lg:text-left">
                                        <div className="text-3xl font-black text-[#0d2d2a] mb-1 flex items-center justify-center lg:justify-start gap-1">
                                            {s.value}
                                            {s.hasStar && (
                                                <span className="text-yellow-400 mb-1">
                                                    <FaStar size={20} />
                                                </span>
                                            )}
                                        </div>
                                        <div className="text-sm font-bold text-[#1a9e6b] uppercase tracking-widest opacity-80">
                                            {s.label}
                                        </div>
                                    </div>

                                    {/* Abstract corner decoration */}
                                    <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#1a9e6b]/5 rounded-full blur-2xl group-hover:bg-[#1a9e6b]/10 transition-all duration-700" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Final bottom accent */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#1a9e6b]/20 to-transparent" />
        </section >
    );
};

export default OurMission;