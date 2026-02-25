import React from "react";
import team1 from "../assets/team_1.png";
import team2 from "../assets/team_2.jpeg";
import team3 from "../assets/team_3.jpg";
import team4 from "../assets/team_4.jpg";
import team5 from "../assets/team_5.jpg";
import team6 from "../assets/team_6.jpg";

/**
 * Data representing team members including names, roles, and profile images.
 */
const team = [
    {
        name: "Kavishka Amaranayaka",
        role: "Team Leader & FullStack Developer",
        initials: "KA",
        image: team1,
    },
    {
        name: "Anjana Idumuni",
        role: "Project Manager & FullStack Developer",
        initials: "AI",
        image: team2,
    },
    {
        name: "Himath Randil",
        role: "FullStack Developer",
        initials: "HR",
        image: team5,
    },
    {
        name: "Arindu Dinuwara",
        role: "FullStack Developer",
        initials: "AD",
        image: team3,
    },
    {
        name: "Nadhir Noori",
        role: "FullStack Developer",
        initials: "NN",
        image: team4,
    },
    {
        name: "Kenan Aponso",
        role: "FullStack Developer",
        initials: "KA",
        image: team6,
    },
];

/**
 * Showcasing the development team with premium, minimalist profile cards.
 */
const MeetOurTeam: React.FC = () => {
    return (
        <section className="bg-[#f0faf6] py-24 px-6 md:px-10">
            <div className="max-w-6xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a9e6b]/10 text-[#1a9e6b] text-xs font-bold uppercase tracking-widest mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1a9e6b] animate-pulse"></span>
                        Our Experts
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
                        Meet the <span className="text-[#1a9e6b]">Orato</span> Team
                    </h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
                        A dedicated group of visionaries and developers working together to redefine
                        language learning through technology.
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {team.map((member) => (
                        <div
                            key={member.name}
                            className="group relative bg-white rounded-[2.5rem] p-8 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(26,158,107,0.12)] border border-[#e0f3eb] flex flex-col items-center"
                        >
                            {/* Decorative Background Element */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#f0faf6] rounded-bl-[5rem] -z-0 transition-all duration-500 group-hover:bg-[#d6f5eb]"></div>

                            {/* Profile Image with Offset Frame */}
                            <div className="relative z-10 mb-8">
                                <div className="absolute -inset-3 border-2 border-dashed border-[#1a9e6b]/20 rounded-[2rem] group-hover:border-[#1a9e6b]/50 group-hover:rotate-6 transition-all duration-500"></div>
                                <div className="w-32 h-32 rounded-[1.8rem] overflow-hidden bg-gradient-to-br from-[#1a9e6b] to-[#0dd68a] relative">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        onError={(e) => {
                                            const target = e.currentTarget;
                                            target.style.display = "none";
                                            const fallback = target.nextElementSibling as HTMLElement;
                                            if (fallback) fallback.style.display = "flex";
                                        }}
                                    />
                                    <div className="hidden absolute inset-0 items-center justify-center text-white text-3xl font-bold bg-inherit italic">
                                        {member.initials}
                                    </div>
                                </div>
                            </div>

                            {/* Member Info */}
                            <div className="text-center z-10 relative">
                                <h3 className="text-xl font-bold text-slate-900 mb-1 transition-colors duration-300 group-hover:text-[#1a9e6b]">
                                    {member.name}
                                </h3>
                                <p className="text-[#1a9e6b] text-sm font-semibold tracking-wide">
                                    {member.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MeetOurTeam;