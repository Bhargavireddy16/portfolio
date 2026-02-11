import { Plus, Pencil, ExternalLink } from "lucide-react";
import metaLogo from "@/assets/meta-logo.webp";

const CertificationsSection = () => {
  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-foreground">Licenses & certifications</h2>
        <div className="flex items-center gap-2">
          <button className="p-1.5 hover:bg-muted rounded-full">
            <Plus className="w-5 h-5 text-muted-foreground" />
          </button>
          <button className="p-1.5 hover:bg-muted rounded-full">
            <Pencil className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </div>

      <div className="flex gap-3">
        <img src={metaLogo} alt="Meta" className="w-12 h-12 rounded object-contain flex-shrink-0" />
        <div>
          <h3 className="text-base font-semibold text-foreground">Meta Front-End Developer</h3>
          <p className="text-sm text-muted-foreground">Meta</p>
          <p className="text-xs text-muted-foreground">Issued Jun 2025</p>
          <a
            href="https://coursera.org/share/29b14c0230faaabf250a2e1c929708ab"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 mt-2 px-4 py-1.5 border border-foreground rounded-full text-sm font-semibold text-foreground hover:bg-muted transition-colors"
          >
            Show credential <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <div className="flex items-center gap-1 mt-3 text-sm text-foreground">
            <span>◇</span>
            <span>React.js, JavaScript and +8 skills</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationsSection;
