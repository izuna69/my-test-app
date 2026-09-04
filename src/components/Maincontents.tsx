import FullpagePkg from "@fullpage/react-fullpage";
import "fullpage.js/dist/fullpage.css";
import MainSection from "./MainSection";
import CalendarSection from "./CalendarSection";
import AnalyticsSection from "./AnalyticsSection";
import Test from "../pages/Test";
import Footer from "../layouts/Footer";


const ReactFullpage = (FullpagePkg as any).default || FullpagePkg;
const Wrapper = ReactFullpage.Wrapper || (({ children }: any) => <>{children}</>);

function FullPageDemo() {
    return (
        <div className="App w-full min-h-screen">
            <ReactFullpage
                debug={false}
                licenseKey="xxxxxxxxxxxxxxxxxxxxxxxxx"
                credits={{ enabled: false }}
                scrollingSpeed={600}
                autoScrolling={true}
                fitToSection={true}
                scrollOverflow={false}
                navigation={true}
                navigationPosition="right"
                keyboardScrolling={true}
                normalScrollElements=".horizontal-scroll"
                render={() => (
                    <Wrapper>
                        {/* Section 1: Main Hero / Product */}
                        <div className="section bg-slate-900 text-white">
                            <MainSection />
                        </div>

                        {/* Section 2: Calendar & Vacation Carousel */}
                        <div className="section bg-slate-900 text-white relative">
                            <CalendarSection />
                        </div>

                        {/* Section 3: Next-Gen Analytics & Stats */}
                        <div className="section bg-slate-950 text-white">
                            <AnalyticsSection />
                        </div>

                        {/* Section 4: Interactive Demo & Counter */}
                        <div className="section bg-slate-900 text-white">
                            <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
                                <Test />
                            </div>

                        </div>
                    </Wrapper>
                )}
            />
        </div>
    );
}

export default FullPageDemo;
