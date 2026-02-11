import { Plus, Pencil } from "lucide-react";

const ProjectsSection = () => {
  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-foreground">Projects</h2>
        <div className="flex items-center gap-2">
          <button className="p-1.5 hover:bg-muted rounded-full">
            <Plus className="w-5 h-5 text-muted-foreground" />
          </button>
          <button className="p-1.5 hover:bg-muted rounded-full">
            <Pencil className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-base font-semibold text-foreground">Project-H</h3>
        <p className="text-xs text-muted-foreground">Jan 2025 - May 2025</p>
        <p className="text-sm text-foreground mt-2">
          Personalized health platform using React, Tailwind, Node.js, and OpenAI, helping users track fitness with 'Oats' AI coach and integrated biometric data analysis.
        </p>
        <div className="flex items-center gap-1 mt-3 text-sm text-foreground">
          <span>◇</span>
          <span>React.js, Node.js and +3 skills</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
