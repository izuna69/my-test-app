interface StatItem {
    value: string;
    label: string;
    valueColor: string;
}
var today = new Date();
var year = today.getFullYear();
var month = ('0' + (today.getMonth() + 1)).slice(-2);
var day = ('0' + today.getDate()).slice(-2);


const stats: StatItem[] = [
    { value: "sss", label: `${year}/${month}/${day} Uptime`, valueColor: "text-blue-400" },
    { value: "0.2s", label: "Interaction Latency", valueColor: "text-indigo-400" },
    { value: "100%", label: "Tailwind Native", valueColor: "text-pink-400" },
];

const AnalyticsSection = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center max-w-4xl mx-auto">
            {/* Badge */}
            <span className="px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-4">
                bunnsekiyou
            </span>

            {/* Heading */}
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight mb-6">
                kyoonodeeta
            </h2>

            {/* Description */}
            <p className="text-slate-400 text-lg max-w-xl mb-12">
                Seamlessly integrated with Tailwind CSS, React Fullpage, and responsive interactive elements.
            </p>

            {/* Stat Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
                {stats.map((stat, idx) => (
                    <div
                        key={idx}
                        className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/30"
                    >
                        <div className={`text-4xl font-extrabold ${stat.valueColor} mb-2`}>
                            {stat.value}
                        </div>
                        <div className="text-sm font-semibold text-slate-300">
                            {stat.label}
                        </div>

                    </div>

                ))}
            </div>

        </div>

    );
};

export default AnalyticsSection;
