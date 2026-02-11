import LinkedInNavbar from "@/components/LinkedInNavbar";
import ProfileHeader from "@/components/ProfileHeader";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ActivitySection from "@/components/ActivitySection";
import InterestsSection from "@/components/InterestsSection";
import LinkedInFooter from "@/components/LinkedInFooter";
import RightSidebar from "@/components/RightSidebar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <LinkedInNavbar />

      {/* Sticky Profile Bar (shown when scrolled) */}
      <div className="max-w-[1128px] mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Main Content */}
          <div className="flex-1 max-w-[744px] space-y-2">
            <ProfileHeader />
            <AboutSection />
            <ActivitySection />
            <ExperienceSection />
            <EducationSection />
            <CertificationsSection />
            <ProjectsSection />
            <SkillsSection />
            <InterestsSection />
          </div>

          {/* Right Sidebar */}
          <div className="hidden lg:block w-[300px] flex-shrink-0">
            <RightSidebar />
          </div>
        </div>
      </div>

      <LinkedInFooter />
    </div>
  );
};

export default Index;
