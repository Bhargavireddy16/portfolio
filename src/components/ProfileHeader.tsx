import { Send, MoreHorizontal, Bell } from "lucide-react";
import bannerImg from "@/assets/banner.jpg";
import profileImg from "@/assets/profile-photo.jpg";
import lifeSpanLogo from "@/assets/life-span.jpeg";

const ProfileHeader = () => {
  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden">
      {/* Banner */}
      <div className="h-[200px] relative">
        <img src={bannerImg} alt="Banner" className="w-full h-full object-cover" />
      </div>

      {/* Profile Photo */}
      <div className="relative px-6">
        <div className="absolute -top-[68px]">
          <img
            src={profileImg}
            alt="Bhargavi Guda"
            className="w-[152px] h-[152px] rounded-full border-4 border-card object-cover"
          />
        </div>

        {/* Bell icon top right */}
        <div className="flex justify-end pt-3">
          <button className="p-2 hover:bg-secondary rounded-full">
            <Bell className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="px-6 pt-8 pb-4">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="flex-1">
            <h1 className="text-[24px] font-semibold text-foreground leading-tight">
              Bhargavi Guda{" "}
              <span className="text-muted-foreground text-base font-normal">She/Her</span>
              <span className="text-muted-foreground text-base font-normal"> · 1st</span>
            </h1>
            <p className="text-base text-foreground mt-1 leading-snug">
              Full Stack Developer | Building Scalable AI Products | React.js • Vue.js | Node.js • Django • FastAPI | Cloud &amp; APIs
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Denton, Texas, United States · <a href="#" className="text-primary font-semibold hover:underline">Contact info</a>
            </p>
            <a href="#" className="text-sm text-primary font-semibold hover:underline mt-1 inline-block">
              500+ connections
            </a>
          </div>

          {/* Company */}
          <div className="mt-3 lg:mt-1 lg:ml-8 flex items-start gap-2">
            <img src={lifeSpanLogo} alt="Life Span" className="w-8 h-8 rounded object-contain flex-shrink-0" />
            <span className="text-sm font-semibold text-foreground">Life Span</span>
          </div>
        </div>

        {/* Mutual Connections */}
        <div className="flex items-center gap-2 mt-3">
          <div className="flex -space-x-2">
            <div className="w-6 h-6 rounded-full bg-muted border-2 border-card" />
            <div className="w-6 h-6 rounded-full bg-muted border-2 border-card" />
          </div>
          <p className="text-xs text-muted-foreground">
            <span className="font-semibold text-foreground">Wajdi Aljedaani, Pavankalyan Ghanta,</span> and 22 other mutual connections
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 mt-4">
          <button className="flex items-center gap-1.5 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-linkedin-blue-hover transition-colors">
            <Send className="w-4 h-4" />
            Message
          </button>
          <button className="flex items-center gap-1.5 border border-foreground text-foreground px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-secondary transition-colors">
            More
          </button>
        </div>

        {/* Open to Work Banner */}
        <div className="mt-4 bg-linkedin-open-to-work border border-linkedin-open-to-work-border rounded-lg p-3">
          <p className="text-sm font-semibold text-foreground">Open to work</p>
          <p className="text-sm text-foreground">Full-stack Developer roles</p>
          <a href="#" className="text-sm text-primary font-semibold hover:underline">Show details</a>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
