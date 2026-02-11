import { Search, Home, Users, BriefcaseBusiness, MessageSquare, Bell, Grid3X3, ChevronDown } from "lucide-react";

const LinkedInNavbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
      <div className="max-w-[1128px] mx-auto flex items-center justify-between px-4 h-[52px]">
        {/* Left: Logo + Search */}
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="hsl(210,83%,40%)" className="w-[34px] h-[34px] flex-shrink-0">
            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
          </svg>
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="I'm looking for..."
              className="w-[280px] h-[34px] pl-9 pr-3 bg-secondary rounded text-sm focus:outline-none focus:ring-2 focus:ring-ring border-none"
            />
          </div>
        </div>

        {/* Right: Nav Items */}
        <div className="flex items-center gap-0">
          <NavItem icon={<Home className="w-5 h-5" />} label="Home" active />
          <NavItem icon={<Users className="w-5 h-5" />} label="My Network" />
          <NavItem icon={<BriefcaseBusiness className="w-5 h-5" />} label="Jobs" />
          <NavItem icon={<MessageSquare className="w-5 h-5" />} label="Messaging" />
          <NavItem icon={<Bell className="w-5 h-5" />} label="Notifications" />
          <NavItem
            icon={
              <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                <span className="text-[10px] font-semibold text-muted-foreground">Me</span>
              </div>
            }
            label="Me"
            hasDropdown
          />
          <div className="hidden lg:block border-l border-border h-10 mx-1" />
          <NavItem icon={<Grid3X3 className="w-5 h-5" />} label="For Business" hasDropdown className="hidden lg:flex" />
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({
  icon,
  label,
  active,
  hasDropdown,
  className = "",
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  hasDropdown?: boolean;
  className?: string;
}) => (
  <button
    className={`flex flex-col items-center justify-center px-3 py-1 min-w-[60px] lg:min-w-[80px] group relative ${className}`}
  >
    <span className={active ? "text-foreground" : "text-muted-foreground group-hover:text-foreground transition-colors"}>
      {icon}
    </span>
    <span className={`text-[11px] leading-tight mt-0.5 flex items-center gap-0.5 ${active ? "text-foreground font-medium" : "text-muted-foreground"}`}>
      {label}
      {hasDropdown && <ChevronDown className="w-3 h-3" />}
    </span>
    {active && (
      <div className="absolute bottom-0 left-2 right-2 h-[2px] bg-foreground rounded-t" />
    )}
  </button>
);

export default LinkedInNavbar;
