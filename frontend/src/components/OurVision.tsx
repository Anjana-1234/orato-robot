import React from "react";
import { HiAcademicCap, HiGlobeAlt, HiLightBulb, HiEye } from "react-icons/hi2";

const visionPoints = [
    {
        icon: <HiAcademicCap size={24} />,
        title: "100M Learners",
        subtitle: "By 2030",
        accent: "from-[#1a9e6b] to-[#0dd68a]"
    },
    {
        icon: <HiGlobeAlt size={24} />,
        title: "Global Access",
        subtitle: "Free Education",
        accent: "from-[#0dd68a] to-[#1a9e6b]"
    },
    {
        icon: <HiLightBulb size={24} />,
        title: "AI Innovation",
        subtitle: "Leading Technology",
        accent: "from-[#1a9e6b] to-[#0dd68a]"
    },
    {
        icon: <HiLightBulb size={24} />,
        title: "Inclusive Growth",
        subtitle: "Equal Opportunity",
        accent: "from-[#0dd68a] to-[#1a9e6b]"
    },
];

const OurVision: React.FC = () => {
    return (
        <section className="relative py-24 px-6 md:px-10 overflow-hidden bg-[#f8fffe]">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1a9e6b]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#0dd68a]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row-reverse gap-16 items-stretch">

                    {/* Content Section */}
                    <div className="flex-1 relative">
                        <div className="relative z-20">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1a9e6b]/10 text-[#1a9e6b] text-xs font-bold uppercase tracking-[0.2em] mb-8 border border-[#1a9e6b]/20">
                                <span className="w-2 h-2 rounded-full bg-[#1a9e6b] animate-pulse" />
                                Our Future Vision
                            </div>

                            <h2 className="text-4xl md:text-5xl font-black text-[#0d2d2a] tracking-tight leading-[1.1] mb-10">
                                Our <span className="text-[#1a9e6b]">Vision</span>
                            </h2>

                            <div className="space-y-8 text-lg">
                                <p className="text-[#2d4a42] leading-relaxed font-medium bg-white/40 backdrop-blur-sm p-6 rounded-3xl border border-white/60 shadow-sm border-l-4 border-l-[#1a9e6b]">
                                    We envision a world where <span className="text-[#1a9e6b] font-bold">language is no longer a barrier</span> to opportunity, education, or connection. ORATO aims to empower 100 million English learners worldwide by 2030, helping them achieve their personal and professional goals through fluent English communication.                                </p>

                                <p className="text-[#5a7a72] leading-relaxed">
                                    Through continuous innovation in AI and educational technology, we're building the future of language learning one that's personalized, effective, and accessible to anyone with a smartphone or computer.                                </p>

                                <p className="text-[#5a7a72] leading-relaxed">
                                    Our ultimate goal is to create a global community of confident English speakers who can pursue their dreams, connect across borders, and contribute to a more united world.
                                </p>
                            </div>

                            {/* Decorative element */}
                            <div className="mt-12 flex items-center gap-8 text-[#1a9e6b]/20">
                                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#1a9e6b]/20 to-transparent" />
                                <span className="animate-pulse">
                                    <HiEye size={20} />
                                </span>
                                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#1a9e6b]/20 to-transparent" />
                            </div>
                        </div>
                    </div>

                    {/* Visual Section: Creative Cards */}
                    <div className="lg:w-[600px] xl:w-[700px] shrink-0 lg:pt-44">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {visionPoints.map((point, index) => (
                                <div
                                    key={index}
                                    className="group relative bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-[0_10px_40px_rgba(30,64,175,0.03)] hover:shadow-[0_25px_60px_rgba(30,64,175,0.08)] transition-all duration-700 flex flex-col items-center gap-6 hover:-translate-y-2 overflow-hidden"
                                >
                                    {/* Animated background gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-indigo-50/0 group-hover:from-blue-50/50 group-hover:to-indigo-50/50 transition-all duration-700" />

                                    <div className="relative shrink-0 pt-1">
                                        <div className="absolute -inset-2 border-2 border-dashed border-blue-100 rounded-2xl group-hover:border-blue-300 group-hover:rotate-12 transition-all duration-700" />
                                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${point.accent} flex items-center justify-center text-white shadow-lg relative z-10 group-hover:scale-110 transition-all duration-500`}>
                                            {point.icon}
                                        </div>
                                    </div>

                                    <div className="relative z-10 text-center">
                                        <div className="text-2xl font-black text-[#0d2d2a] mb-0.5">
                                            {point.title}
                                        </div>
                                        <div className="text-sm font-bold text-[#1a9e6b] uppercase tracking-widest opacity-80">
                                            {point.subtitle}
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

            {/* Section separator */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#1a9e6b]/10 to-transparent" />
        </section>
    );
};

export default OurVision;
