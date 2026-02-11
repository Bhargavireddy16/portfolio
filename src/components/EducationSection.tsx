import { Plus, Pencil } from "lucide-react";
import untLogo from "@/assets/unt-logo.png";
import nhceLogo from "@/assets/nhce-logo.jpeg";

const educationData = [
  {
    logo: untLogo,
    school: "University of North Texas",
    degree: "Master of Science - MS, Computer Science",
    dates: "Aug 2023 - May 2025",
  },
  {
    logo: nhceLogo,
    school: "New Horizon College of Engineering",
    degree: "Bachelor's degree, Computer Science",
    dates: "Aug 2018 - Aug 2022",
  },
];

const EducationSection = () => {
  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-foreground">Education</h2>
        <div className="flex items-center gap-2">
          <button className="p-1.5 hover:bg-muted rounded-full">
            <Plus className="w-5 h-5 text-muted-foreground" />
          </button>
          <button className="p-1.5 hover:bg-muted rounded-full">
            <Pencil className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </div>
      <div className="space-y-4">
        {educationData.map((edu, index) => (
          <div key={index}>
            {index > 0 && <div className="border-t border-border mb-4" />}
            <div className="flex gap-3">
              <img src={edu.logo} alt={edu.school} className="w-12 h-12 rounded object-contain flex-shrink-0" />
              <div>
                <h3 className="text-base font-semibold text-foreground">{edu.school}</h3>
                <p className="text-sm text-foreground">{edu.degree}</p>
                <p className="text-xs text-muted-foreground">{edu.dates}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
