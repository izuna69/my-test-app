
import SettingProfile from "../components/SettingProfile";
import PageContainer from "../layouts/PageContainer";

const SettingPage = () => {
    return (
        <div className="dark min-h-screen bg-[#0f172a] pt-32 pb-24 px-4 sm:px-6 lg:px-8">
            <PageContainer>
                <SettingProfile />
            </PageContainer>


        </div >
    );
};

export default SettingPage;
