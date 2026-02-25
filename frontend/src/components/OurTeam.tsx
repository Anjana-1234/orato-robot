import React from "react";
import team1 from "../assets/team_1.png";
import team2 from "../assets/team_2.jpg";
import team3 from "../assets/team_3.jpg";
import team4 from "../assets/team_4.jpg";
import team5 from "../assets/team_5.jpg";
import team6 from "../assets/team_6.jpg";

/**
 * Data representing team members including names, roles, and profile images.
 */
const team = [
    { name: "Kavishka Amaranayaka", role: "TL & FullStack Developer", initials: "KA", image: team1 },
    { name: "Anjana Idumuni", role: "PM & FullStack Developer", initials: "AI", image: team2 },
    { name: "Himath Randil", role: "FullStack Developer", initials: "HR", image: team5 },
    { name: "Arindu Dinuwara", role: "FullStack Developer", initials: "AD", image: team3 },
    { name: "Nadhir Noori", role: "FullStack Developer", initials: "NN", image: team4 },
    { name: "Kenan Aponso", role: "FullStack Developer", initials: "KA", image: team6 },
];

/**
 * Showcasing the development team with profile cards.
 */
const MeetOurTeam: React.FC = () => {
    return (
        <section className="bg-[#f0faf6] py-16 px-10">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-extrabold text-[#0d2d2a] text-center mb-10">
                    Meet Our Team
                </h2>

                {/* Grid container: 1 column on mobile, 3 columns on medium screens and up. */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {team.map((member) => (
                        <div
                            key={member.name}
                            className="bg-white rounded-3xl py-9 px-5 flex flex-col items-center gap-3 shadow-sm hover:-translate-y-1.5 hover:shadow-lg transition-all duration-200"
                        >
                            {/* Profile Image Container with fallback support */}
                            <div className="w-[96px] h-[96px] rounded-full overflow-hidden border-2 border-[#1a9e6b] flex items-center justify-center bg-gradient-to-br from-[#1a9e6b] to-[#0dd68a]">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        // If image fails to load, hide it and display the initials fallback
                                        const target = e.currentTarget;
                                        target.style.display = "none";
                                        const fallback = target.nextElementSibling as HTMLElement;
                                        if (fallback) fallback.style.display = "flex";
                                    }}
                                />
                                {/* Fallback initials displayed only when image loading fails */}
                                <span className="text-white text-xl font-bold hidden w-full h-full items-center justify-center">
                                    {member.initials}
                                </span>
                            </div>

                            <h3 className="text-base font-bold text-[#0d2d2a] text-center">{member.name}</h3>
                            <p className="text-sm text-[#6b8f84] text-center">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MeetOurTeam;