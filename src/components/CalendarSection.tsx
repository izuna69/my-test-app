import { useEffect, useRef } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

interface VacationCard {
    num: string;
    title: string;
    location: string;
}

const vacationImages: VacationCard[] = [
    { num: "01", title: "Emerald Coast", location: "Bali, Indonesia" },
    { num: "02", title: "Crystal Lagoon", location: "Maldives" },
    { num: "03", title: "Sunset Haven", location: "Santorini, Greece" },
    { num: "04", title: "Tropical Oasis", location: "Phuket, Thailand" },
    { num: "05", title: "Azure Paradise", location: "Hawaii, USA" },

];

const CalendarSection = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Initial scroll position: Start from the center-most card
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const centerMiddleCard = () => {
            const middleIndex = Math.floor(vacationImages.length / 2);
            const middleElement = container.children[middleIndex] as HTMLElement;
            if (middleElement) {
                const containerCenter = container.clientWidth / 2;
                const elementCenter = middleElement.offsetLeft + middleElement.clientWidth / 2;
                container.scrollTo({
                    left: elementCenter - containerCenter,
                    behavior: "auto",
                });
            } else {
                container.scrollLeft = (container.scrollWidth - container.clientWidth) / 2;
            }
        };

        requestAnimationFrame(centerMiddleCard);
        const timer = setTimeout(centerMiddleCard, 100);
        return () => clearTimeout(timer);
    }, []);

    // Mouse wheel horizontal scrolling over gallery
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const handleWheel = (e: WheelEvent) => {
            if (e.deltaY !== 0) {
                e.preventDefault();
                container.scrollLeft += e.deltaY * 1.8;
            }
        };

        container.addEventListener("wheel", handleWheel, { passive: false });
        return () => container.removeEventListener("wheel", handleWheel);
    }, []);

    // Manual navigation buttons (Snaps 1 card at a time: 320px card + 24px gap = ~344px)
    const scrollLeft = () => {
        scrollContainerRef.current?.scrollBy({ left: -344, behavior: "smooth" });
    };

    const scrollRight = () => {
        scrollContainerRef.current?.scrollBy({ left: 344, behavior: "smooth" });
    };

    return (
        <div className="w-full h-full flex flex-col items-center justify-center px-4 pt-20 pb-12 max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-8">
                <span className="inline-block px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full mb-3">
                    Schedule
                </span>
                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-2">
                    Calendar
                </h1>
                <p className="text-slate-400 text-sm sm:text-base max-w-md mx-auto">
                    gamennwosuraisusitegudasai
                </p>
            </div>

            {/* Gallery Carousel with Arrow Controls */}
            <div className="relative w-full max-w-5xl group">
                {/* Left Arrow Button */}
                <button
                    type="button"
                    onClick={scrollLeft}
                    className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-slate-800/90 hover:bg-blue-600 text-white flex items-center justify-center shadow-xl border border-slate-700 transition cursor-pointer backdrop-blur-md"
                    aria-label="Scroll left"
                >
                    <IoChevronBack className="w-5 h-5" />
                </button>

                {/* Horizontal Scrollable Container with Snap */}
                <div
                    ref={scrollContainerRef}
                    className="horizontal-scroll flex gap-6 overflow-x-auto snap-x snap-mandatory p-4 [&::-webkit-scrollbar]:hidden scroll-smooth"
                >
                    {vacationImages.map((item) => (
                        <div
                            key={item.num}
                            className="snap-center shrink-0 w-72 sm:w-80 h-[380px] rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-800 relative group/card transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/10"
                        >
                            <img
                                src={`/ImageAssets/vacation-${item.num}.jpg`}
                                alt={item.title}
                                className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                            />
                            {/* Bottom Card Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-5">
                                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                                    {item.location}
                                </span>
                                <h3 className="text-xl font-bold text-white mt-1">
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Arrow Button */}
                <button
                    type="button"
                    onClick={scrollRight}
                    className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-slate-800/90 hover:bg-blue-600 text-white flex items-center justify-center shadow-xl border border-slate-700 transition cursor-pointer backdrop-blur-md"
                    aria-label="Scroll right"
                >
                    <IoChevronForward className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};

export default CalendarSection;
