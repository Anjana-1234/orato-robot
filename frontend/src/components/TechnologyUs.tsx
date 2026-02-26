import React from "react";
import {
    HiSparkles,
    HiCpuChip,
    HiDevicePhoneMobile,
    HiMicrophone,
    HiCloudArrowUp,
} from "react-icons/hi2";

const techFeatures = [
    {
        title: "AI-Powered Learning",
        desc: "Our advanced AI algorithms analyze your learning patterns and adapt lessons to your skill level, ensuring optimal progress and retention.",
        icon: HiCpuChip,
        gradient: "from-[#1a9e6b] to-[#0dd68a]",
        glow: "rgba(26,158,107,0.12)",
        tag: "Smart",
    },
    {
        title: "Cross-Platform",
        desc: "Learn on any device — web, mobile, or tablet. Your progress syncs seamlessly across all platforms so you can learn anytime, anywhere.",
        icon: HiDevicePhoneMobile,
        gradient: "from-[#0dd68a] to-[#1a9e6b]",
        glow: "rgba(13,214,138,0.12)",
        tag: "Universal",
    },
    {
        title: "Speech Recognition",
        desc: "Practice pronunciation with our state-of-the-art speech recognition technology that provides instant feedback on your speaking skills.",
        icon: HiMicrophone,
        gradient: "from-[#1a9e6b] to-[#0dd68a]",
        glow: "rgba(26,158,107,0.12)",
        tag: "Real-time",
    },
    {
        title: "Cloud-Based Storage",
        desc: "All your data is securely stored in the cloud with automatic backups, ensuring you never lose your progress.",
        icon: HiCloudArrowUp,
        gradient: "from-[#0dd68a] to-[#1a9e6b]",
        glow: "rgba(13,214,138,0.12)",
        tag: "Secure",
    },
];

const PoweredByTechnology: React.FC = () => {
    return (
        <section className="bg-[#f8fffe] py-16 md:py-24 px-6 md:px-10">
            <div className="max-w-6xl mx-auto">

                {/* For Section Header. */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#1a9e6b]/10 border border-[#1a9e6b]/20 mb-5">
                        <span className="text-[#1a9e6b] animate-pulse"><HiSparkles size={18} /></span>
                        <span className="text-xs font-bold uppercase tracking-widest text-[#1a9e6b]">Cutting Edge</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-[#0d2d2a] tracking-tight">
                        Powered by{" "}
                        <span className="text-[#1a9e6b]">
                            Technology
                        </span>
                    </h2>
                    <p className="mt-4 text-[#5a7a72] text-lg max-w-xl mx-auto leading-relaxed">
                        Experience the future of language learning with our high-performance tech stack.
                    </p>
                </div>

                {/* For feature Cards Grid. */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {techFeatures.map((f) => {
                        const Icon = f.icon;
                        return (
                            <div
                                key={f.title}
                                className="group relative bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-white/60 shadow-sm hover:shadow-xl transition-all duration-700 flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-6 hover:-translate-y-2 overflow-hidden"
                                style={{ boxShadow: `0 10px 40px ${f.glow}` }}
                            >
                                {/* For background glow blob. */}
                                <div
                                    className={`absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br ${f.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-700 blur-2xl`}
                                />

                                <div className="flex flex-col items-center md:items-start gap-5 relative z-10 w-full">
                                    {/* For icon and tag. */}
                                    <div className="flex items-center justify-between w-full">
                                        <div className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-white border border-[#e0f3eb] flex items-center justify-center text-[#1a9e6b] shadow-sm relative z-10 group-hover:bg-[#1a9e6b] group-hover:text-white transition-all duration-500`}>
                                            <Icon size={26} />
                                        </div>
                                        <span className={`inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#1a9e6b]/10 text-[#1a9e6b] border border-[#1a9e6b]/20`}>
                                            {f.tag}
                                        </span>
                                    </div>

                                    {/* For text. */}
                                    <div>
                                        <h3 className="text-xl font-black text-[#0d2d2a] mb-2 group-hover:text-[#1a9e6b] transition-colors duration-500">
                                            {f.title}
                                        </h3>
                                        <p className="text-sm text-[#5a7a72] leading-relaxed">
                                            {f.desc}
                                        </p>
                                    </div>
                                </div>

                                {/* Corner ornament */}
                                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#1a9e6b]/5 rounded-full blur-2xl group-hover:bg-[#1a9e6b]/10 transition-all duration-700" />
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default PoweredByTechnology;