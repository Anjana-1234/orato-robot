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
        gradient: "from-violet-500 to-purple-600",
        glow: "rgba(139,92,246,0.18)",
        tag: "Smart",
    },
    {
        title: "Cross-Platform",
        desc: "Learn on any device — web, mobile, or tablet. Your progress syncs seamlessly across all platforms so you can learn anytime, anywhere.",
        icon: HiDevicePhoneMobile,
        gradient: "from-sky-400 to-blue-600",
        glow: "rgba(56,189,248,0.18)",
        tag: "Universal",
    },
    {
        title: "Speech Recognition",
        desc: "Practice pronunciation with our state-of-the-art speech recognition technology that provides instant feedback on your speaking skills.",
        icon: HiMicrophone,
        gradient: "from-rose-400 to-pink-600",
        glow: "rgba(251,113,133,0.18)",
        tag: "Real-time",
    },
    {
        title: "Cloud-Based Storage",
        desc: "All your data is securely stored in the cloud with automatic backups, ensuring you never lose your progress.",
        icon: HiCloudArrowUp,
        gradient: "from-emerald-400 to-teal-600",
        glow: "rgba(52,211,153,0.18)",
        tag: "Secure",
    },
];

const PoweredByTechnology: React.FC = () => {
    return (
        <section className="bg-[#f8fffe] py-24 px-6 md:px-10">
            <div className="max-w-6xl mx-auto">

                {/* For Section Header. */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-purple-50 border border-purple-100 mb-5">
                        <span className="text-purple-500 animate-pulse"><HiSparkles size={18} /></span>
                        <span className="text-xs font-bold uppercase tracking-widest text-purple-600">Cutting Edge</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-[#0d2d2a] tracking-tight">
                        Powered by{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500">
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
                                className="group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                                style={{ boxShadow: `0 4px 24px 0 ${f.glow}` }}
                            >
                                {/* For background glow blob. */}
                                <div
                                    className={`absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br ${f.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300 blur-2xl`}
                                />

                                {/* For tag badge. */}
                                <span className={`inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-gradient-to-r ${f.gradient} text-white mb-5`}>
                                    {f.tag}
                                </span>

                                <div className="flex items-start gap-5">
                                    {/* For icon. */}
                                    <div className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${f.gradient} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon size={26} color="white" />
                                    </div>

                                    {/* For text. */}
                                    <div>
                                        <h3 className="text-lg font-bold text-[#0d2d2a] mb-2 group-hover:text-purple-700 transition-colors duration-200">
                                            {f.title}
                                        </h3>
                                        <p className="text-sm text-[#5a7a72] leading-relaxed">
                                            {f.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default PoweredByTechnology;