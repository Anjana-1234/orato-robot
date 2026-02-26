
const PageBackground = ({ children }: { children: React.ReactNode }) => {
    return (

        <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-green-800 to-emerald-950">
            <div className="relative z-10"></div>
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(16,185,129,0.25),transparent_60%)]"></div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 py-10">
                {children}
            </div>
        </div>


    );
};

export default PageBackground;