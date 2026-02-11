import { Plus, Pencil, SquareArrowOutUpRight } from "lucide-react";

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

      {/* Construct AI */}
      <div>
        <h3 className="text-base font-semibold text-foreground">
          <a href="https://ai-scene-generator.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Construct AI
          </a>
        </h3>
        <p className="text-xs text-muted-foreground">Aug 2024 - Oct 2024</p>
        <p className="text-sm text-foreground mt-2">
          High-performance neural scene engine that enables users to synthesize complex 3D worlds from natural language commands using Electron and WebGL.
        </p>
        <div className="flex items-center gap-1 mt-3 text-sm text-foreground mb-3">
          <span>◇</span>
          <span>Electron, Three.js, Node.js and +4 skills</span>
        </div>
        <div className="border border-border rounded-lg overflow-hidden max-w-md">
          <a href="https://ai-scene-generator.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex bg-muted/30 hover:bg-muted/50 transition-colors group">
            <div className="w-24 h-16 shrink-0 bg-muted">
              <img src="/projects/construct-ai.png" alt="Construct AI" className="w-full h-full object-cover" />
            </div>
            <div className="p-3 flex items-center justify-between flex-1 min-w-0">
              <span className="text-sm font-medium truncate text-foreground pr-2">Construct AI | 3D Scene Engine</span>
              <SquareArrowOutUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary shrink-0" />
            </div>
          </a>
        </div>
      </div>

      <div className="border-t border-border my-6" />

      {/* Architex AI */}
      <div>
        <h3 className="text-base font-semibold text-foreground">
          <a href="https://azure-ai-drafter.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Architex AI
          </a>
        </h3>
        <p className="text-xs text-muted-foreground">Sep 2024 - Dec 2024</p>
        <p className="text-sm text-foreground mt-2">
          Production-grade architectural platform fusing Next.js engineering with Azure AI (GPT-4) to generate, optimize, and visualize designs in real-time.
        </p>
        <div className="flex items-center gap-1 mt-3 text-sm text-foreground mb-3">
          <span>◇</span>
          <span>Next.js, Azure AI, Three.js and +2 skills</span>
        </div>
        <div className="border border-border rounded-lg overflow-hidden max-w-md">
          <a href="https://azure-ai-drafter.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex bg-muted/30 hover:bg-muted/50 transition-colors group">
            <div className="w-24 h-16 shrink-0 bg-muted">
              <img src="/projects/architex-ai.png" alt="Architex AI" className="w-full h-full object-cover" />
            </div>
            <div className="p-3 flex items-center justify-between flex-1 min-w-0">
              <span className="text-sm font-medium truncate text-foreground pr-2">Architex AI | Architectural Platform</span>
              <SquareArrowOutUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary shrink-0" />
            </div>
          </a>
        </div>
      </div>

      <div className="border-t border-border my-6" />

      {/* Project-H */}
      <div>
        <h3 className="text-base font-semibold text-foreground">
          <a href="https://www.projhealth.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Project-H
          </a>
        </h3>
        <p className="text-xs text-muted-foreground">Jan 2025 - May 2025</p>
        <p className="text-sm text-foreground mt-2">
          Personalized health platform using React, Tailwind, and Node.js. Optimized frontend performance and integrated 'Oats' AI coach for biometric analysis, focusing on responsive UI implementation.
        </p>
        <div className="flex items-center gap-1 mt-3 text-sm text-foreground mb-3">
          <span>◇</span>
          <span>React.js, Node.js and +3 skills</span>
        </div>
        <div className="border border-border rounded-lg overflow-hidden max-w-md">
          <a href="https://www.projhealth.com/" target="_blank" rel="noopener noreferrer" className="flex bg-muted/30 hover:bg-muted/50 transition-colors group">
            <div className="w-24 h-16 shrink-0 bg-muted">
              <img src="/projects/project-h.png" alt="Project-H" className="w-full h-full object-cover" />
            </div>
            <div className="p-3 flex items-center justify-between flex-1 min-w-0">
              <span className="text-sm font-medium truncate text-foreground pr-2">Project-H | Health Platform</span>
              <SquareArrowOutUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary shrink-0" />
            </div>
          </a>
        </div>
      </div>

    </div>
  );
};

export default ProjectsSection;
